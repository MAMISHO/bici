enyo.kind({
    name: 'MapBox',
    kind: 'FittableRows',
    // fit: true,
    events: {
        onMapCreated: ''
    },
    published:{
        lat:"",
        lon:"",
        ciudad:"",
        stations:[],
        description:"",
        titulo:"Ciudad de Wien"
    },
    components: [{
        fit: true,
        style: "position:relative;",
        components: [{
            tag: 'div',
            id: "map",
            name: 'map',
            classes: 'map',
            allowHtml: true,
            content: "Mapa"
        }]
    }],
    //* @protected
    create: function () {
        this.inherited(arguments);
        // this.latChanged();
        // this.lonChanged();
        // this.ciudadChanged();
        // this.stationsChanged();
    },
    rendered: function () {
        this.inherited(arguments);
        this.load();

    },
    load: function () {
        var token = L.mapbox.accessToken = 'pk.eyJ1IjoibWFtaXNobyIsImEiOiJwb1kzeEMwIn0.-Jz8Se_wuJD-mv714o7qOg';
        var map = L.mapbox.map('map', 'mamisho.h68o8hkp').setView([this.lat, this.lon], 15);
        this.position(map);
    },

    position: function(map){
        // console.log(this.ciudad);
        var featureLayer = L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org
        // for the full specification
            type: 'Feature',
            geometry: {
                type: 'Point',
                // coordinates here are in longitude, latitude order because
                // x, y is the standard for GeoJSON and many formats
                coordinates: [this.lon, this.lat]
            },
            properties: {
                title: this.titulo,
                description: this.description,
                // one can customize markers by adding simplestyle properties
                // https://www.mapbox.com/guides/an-open-platform/#simplestyle
                'marker-size': 'large',
                'marker-color': '#BE9A6B',
                'marker-symbol': 'bicycle'
            }
        }).addTo(map);

        featureLayer.eachLayer(function(layer) {

            // here you call `bindPopup` with a string of HTML you create - the feature
            // properties declared above are available under `layer.feature.properties`
            var content = '<h2>'+layer.feature.properties.title+'<\/h2>'
                 + layer.feature.properties.description + '<br \/>';
            
            layer.bindPopup(content);
        });
    },

    setLocation: function(latitud, longitud){
        this.setLat(latitud);
        this.setLon(longitud);
        this.render();
    },

    setCiudad:function(ciudad){
        this.ciudad = ciudad;
        this.setTitulo("Ciudad de " + ciudad);
        // this.load();
        // console.log("Cambia la ciudad: ");
        // console.log(this.ciudad);
    },
    setLocationStation: function(lati, long){
        this.lat = lati;
        this.lon = long;
        // this.render();
        //var token = L.mapbox.accessToken = 'pk.eyJ1IjoibWFtaXNobyIsImEiOiJwb1kzeEMwIn0.-Jz8Se_wuJD-mv714o7qOg';
        //var map = L.mapbox.map('map', 'mamisho.h68o8hkp').setView([lat,lon], 15);
        //this.position(map);
        //this.$.map.render();
    },

    setDescription: function(desc){
        this.description = desc;
        this.render();
    },

    setTitulo: function(tit){
        this.titulo = tit;
    },

    setEstacion: function(estacion){
        // console.log(estacion)
        this.setLocationStation(estacion.latitude, estacion.longitude);
        var de = "<h3>" + estacion.name + "<\/h3>";
        de += "<div class='ciudad'><i class='fa fa-unlock'></i>&nbsp;&nbsp; : &nbsp;" + estacion.empty_slots + '<br \/>' 
        + "<i class='fa fa-bicycle'></i>&nbsp; : &nbsp;" + estacion.free_bikes + '<br \/>' 
        + "<\/div> <br \/> <span>" + estacion.timestamp + "<\/span>";
        this.setDescription(de);
    }
});