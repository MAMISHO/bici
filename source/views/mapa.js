enyo.kind({
    name: 'MapBox',
    kind: 'FittableRows',
    // fit: true,
    events: {
        onMapCreated: ''
    },
    published:{
        lat:"",
        lon:""
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
            content: "example"
        }]
    }],
    //* @protected
    create: function () {
        this.inherited(arguments);
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
        L.mapbox.featureLayer({
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
            title: 'Estación',
            description: '1718 14th St NW, Washington, DC',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bicycle'
        }
    }).addTo(map);
    },

    setLocation: function(latitud, longitud){
        this.setLat(latitud);
        this.setLon(longitud);
        this.render();
    }
});