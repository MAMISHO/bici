enyo.kind({
	name: "myapp.MainView",
	kind: "FittableRows",
	fit: true,
	published:{
		api: "http://api.citybik.es",
		api2:"http://api.openweathermap.org/data/2.5/weather?APPID=93083466742c7b7e8814f737b7129692&q=",
		networks:"/v2/networks",
		data:[],	//datos principales de la API
		pais:[],	//ciudades que tiene el pais
		ciudad:[]	//estaciones que tiene la ciudad
	},
	components:[
		{kind: "onyx.Toolbar", components:[
			{name:"paisLabel", content:"Austria"},
			{name:"ciudadLabel", content:"- Wien"}
		]},
		{kind: 'Panels', name:"panel", fit: true, classes: 'panels-sample-sliding-panels', arrangerKind: 'CollapsingArranger', wrap: false, components: [
			{name: 'left', classes:"panel-single", components: [
				{kind: 'List', name:"listaPaises", count: 24, classes: 'enyo-fit', touch: true, onSetupItem: 'setupItem', item: 'item1', components: [
					{name: 'item1', classes: 'panels-sample-sliding-item', ontap: "itemTap"}
				]}
			]},
			{name: 'middle', classes:"panel-single", components: [
				{kind: 'List',name:"listaCiudades", classes: 'enyo-fit', touch: true, count: 0, onSetupItem: 'setupItem1', item: 'item2', components: [
					{name: 'item2', classes: 'panels-sample-sliding-item', ontap:"ciudadTap"}
				]}
			]},
			{name: 'stations', classes:"panels-sample-slinding-hide", components: [
				{kind: 'List', name:"listaEstaciones", classes: 'enyo-fit', touch: true, count: 0, onSetupItem: 'setupItem2', item: 'item3', components: [
					{name: 'item3', classes: 'panels-sample-sliding-item', ontap:"estacionTap"}
				]}
			]},
			{name: 'body',classes:"panel-single", fit: true, components: [
				// {kind: 'Scroller', classes: 'enyo-fit', touch: true, components: [
				// 	{classes: 'panels-sample-sliding-content', content: 'Broke, down dumb hospitality firewood chitlins. Has mud tired uncle everlastin\' cold, out. Hauled thar, up thar tar heffer quarrel farmer fish water is. Simple gritts dogs soap give kickin\'. Ain\'t shiney water range, preacher java rent thar go. Skinned wirey tin farm, trespassin\' it, rodeo. Said roped caught creosote go simple. Buffalo butt, jig fried commencin\' cipherin\' maw, wash. Round-up barefoot jest bible rottgut sittin\' trailer shed jezebel. Crop old over poker drinkin\' dirt where tools skinned, city-slickers tools liniment mush tarnation. Truck lyin\' snakeoil creosote, old a inbred pudneer, slap dirty cain\'t. Hairy, smokin\', nothin\' highway hootch pigs drinkin\', barefoot bootleg hoosegow mule. Tax-collectors uncle wuz, maw watchin\' had jumpin\' got redblooded gimmie truck shootin\' askin\' hootch. No fat ails fire soap cabin jail, reckon if trespassin\' fixin\' rustle jest liniment. Ya huntin\' catfish shot good bankrupt. Fishin\' sherrif has, fat cooked shed old. Broke, down dumb hospitality firewood chitlins. Has mud tired uncle everlastin\' cold, out. Hauled thar, up thar tar heffer quarrel farmer fish water is. Simple gritts dogs soap give kickin\'. Ain\'t shiney water range, preacher java rent thar go. Skinned wirey tin farm, trespassin\' it, rodeo. Said roped caught creosote go simple. Buffalo butt, jig fried commencin\' cipherin\' maw, wash. Round-up barefoot jest bible rottgut sittin\' trailer shed jezebel. Crop old over poker drinkin\' dirt where tools skinned, city-slickers tools liniment mush tarnation. Truck lyin\' snakeoil creosote, old a inbred pudneer, slap dirty cain\'t. Hairy, smokin\', nothin\' highway hootch pigs drinkin\', barefoot bootleg hoosegow mule. Tax-collectors uncle wuz, maw watchin\' had jumpin\' got redblooded gimmie truck shootin\' askin\' hootch. No fat ails fire soap cabin jail, reckon if trespassin\' fixin\' rustle jest liniment. Ya huntin\' catfish shot good bankrupt. Fishin\' sherrif has, fat cooked shed old. Broke, down dumb hospitality firewood chitlins. Has mud tired uncle everlastin\' cold, out. Hauled thar, up thar tar heffer quarrel farmer fish water is. Simple gritts dogs soap give kickin\'. Ain\'t shiney water range, preacher java rent thar go. Skinned wirey tin farm, trespassin\' it, rodeo. Said roped caught creosote go simple. Buffalo butt, jig fried commencin\' cipherin\' maw, wash. Round-up barefoot jest bible rottgut sittin\' trailer shed jezebel. Crop old over poker drinkin\' dirt where tools skinned, city-slickers tools liniment mush tarnation. Truck lyin\' snakeoil creosote, old a inbred pudneer, slap dirty cain\'t. Hairy, smokin\', nothin\' highway hootch pigs drinkin\', barefoot bootleg hoosegow mule. Tax-collectors uncle wuz, maw watchin\' had jumpin\' got redblooded gimmie truck shootin\' askin\' hootch. No fat ails fire soap cabin jail, reckon if trespassin\' fixin\' rustle jest liniment. Ya huntin\' catfish shot good bankrupt. Fishin\' sherrif has, fat cooked shed old. Broke, down dumb hospitality firewood chitlins. Has mud tired uncle everlastin\' cold, out. Hauled thar, up thar tar heffer quarrel farmer fish water is. Simple gritts dogs soap give kickin\'. Ain\'t shiney water range, preacher java rent thar go. Skinned wirey tin farm, trespassin\' it, rodeo. Said roped caught creosote go simple. Buffalo butt, jig fried commencin\' cipherin\' maw, wash. Round-up barefoot jest bible rottgut sittin\' trailer shed jezebel. Crop old over poker drinkin\' dirt where tools skinned, city-slickers tools liniment mush tarnation. Truck lyin\' snakeoil creosote, old a inbred pudneer, slap dirty cain\'t. Hairy, smokin\', nothin\' highway hootch pigs drinkin\', barefoot bootleg hoosegow mule. Tax-collectors uncle wuz, maw watchin\' had jumpin\' got redblooded gimmie truck shootin\' askin\' hootch. No fat ails fire soap cabin jail, reckon if trespassin\' fixin\' rustle jest liniment. Ya huntin\' catfish shot good bankrupt. Fishin\' sherrif has, fat cooked shed old.'}
				// ]}
				{kind: "MapBox", name:"mapa", fit:true, classes: 'enyo-fit', lat:"48.2081743", lon:"16.3738189"}
			]}
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", name:"boton", content: "Países", ontap: "paisesTap"}
		]}
	],
	create: function(){
		this.inherited(arguments);
		this.cargarV1();
		this.cargarV2("/v2/networks/citybike-wien");
		this.condicionesAmbientales("wien", "AT");
	},

	paisesTap: function(inSender, inEvent){
		if(this.$.panel.getIndex()!=0){
			this.$.panel.setIndex(0);
			this.$.stations.addClass("panels-sample-slinding-hide");
    		this.$.stations.removeClass("panel-single");
			this.$.panel.render();
		}
	},

	setupItem: function(inSender, inEvent) {

		var index = inEvent.index;
		this.$[inSender.item].setContent(this.paises[index].nombre);		
		return true;
	},

	setupItem1: function(inSender, inEvent){
		var index = inEvent.index;
		this.$[inSender.item].setContent(this.pais[index].location.city);
		return true;
	},

	setupItem2: function(inSender, inEvent){
		var index = inEvent.index;
		this.$[inSender.item].setContent(this.ciudad.stations[index].name);
		return true;
	},

	checkboxChange: function(inSender) {
		
		this.$.panels.realtimeFit = inSender.getValue();
		return true;
	},
	dataChanged: function(v){
		// console.log("Se actualiza");
		// this.$.repeater1.setCount(this.data.length);
	},

	cargarV1: function(){ //trae ls paises.
        var request = new enyo.Ajax({
            url: this.api + this.networks,
            method: "GET",
            cacheBust: false,
            callbackName: null,
            overrideCallback: null
        });

        request.response(enyo.bind(this, "resultados"));
        request.go();
    },

    resultados: function(inRequest, inResponse){
        
        if (!inResponse){
        	return;
        }

        this.data = inResponse.networks;
        for (var i = 0; i < this.paises.length; i++) {
        	var networks=[];
        	for (var j = 0; j < this.data.length; j++) {
        		if(this.paises[i].id == this.data[j].location.country){
        			networks.push(this.data[j]);
        		}
        	}
        	this.paises[i].networks = networks;
        }
        // console.log(this.paises);
        // this.$.repeater1.setCount(this.data.length);
        // this.$.repeater1.render();

        this.pais = this.paises[0].networks;
        this.$.listaCiudades.setCount(this.pais.length);
        this.$.listaCiudades.render();
    },

    cargarV2: function(network){ //trae estaciones de la ciudad seleccionada
    	// console.log(this.api + network);
        var request = new enyo.Ajax({
            url: this.api + network,
            method: "GET",
            cacheBust: false,
            callbackName: null,
            overrideCallback: null
        });

        request.response(enyo.bind(this, "resultadoEstaciones"));
        request.go();
    },

    resultadoEstaciones: function(inRequest, inResponse){
    	if (!inResponse){
        	return;
        }
    	// console.log(inResponse);
    	this.ciudad = inResponse.network;
    	this.$.mapa.setCiudad(this.ciudad.location.city);
    	// console.log(this.ciudad);
    	this.$.mapa.setDescription("Servicio: " + this.ciudad.name + '<br \/>' + 'Estacionamientos : ' + this.ciudad.stations.length);
    	this.$.listaEstaciones.setCount(this.ciudad.stations.length);
        this.$.listaEstaciones.render();
    },


    itemTap: function(inSender, inEvent){
    	this.pais = this.paises[inEvent.index].networks;
        this.$.listaCiudades.setCount(this.pais.length);
        this.$.listaCiudades.render();
        this.$.paisLabel.setContent(this.paises[inEvent.index].nombre);
        this.$.ciudadLabel.setContent("");
    	// console.log(this.paises[inEvent.index]);
    },

    ciudadTap: function(inSender, inEvent){
    	// mostramos la ciudad en el mapa
    	var ciudad = this.pais[inEvent.index];
    	// console.log(ciudad);
    	
  		var latitud  = ciudad.location.latitude;
  		var longitud = ciudad.location.longitude;
    	this.$.mapa.setLocation(latitud, longitud);

    	//solicitamos las estaciones y las cargamos en la lista
    	this.cargarV2(ciudad.href);
    	//solicitamos las condiciones ambientales
    	this.condicionesAmbientales(ciudad.location.city, ciudad.location.country);

    	//mostramos los cambios en el mapa
    	if(this.$.panel.getIndex()==0){
    		this.$.panel.next();
    	}
    	this.$.stations.removeClass("panels-sample-slinding-hide");
    	this.$.stations.addClass("panel-single");
    	this.$.panel.render();
    	this.$.ciudadLabel.setContent("- " + ciudad.location.city);
    },

    estacionTap: function(inSender, inEvent){
    	var index = inEvent.index;
    	// console.log(this.ciudad.stations[index]);
    	this.$.mapa.setEstacion(this.ciudad.stations[index]);
    },

    condicionesAmbientales: function(ciudad, pais){
    	// console.log(this.api + network);
        var request = new enyo.Ajax({
            url: this.api2 + ciudad + "," + pais,
            method: "GET",
            cacheBust: false,
            callbackName: null,
            overrideCallback: null
        });

        request.response(enyo.bind(this, "resultadoAmbiente"));
        request.go();
    },

    resultadoAmbiente: function(inRequest, inResponse){
    	if (!inResponse){
        	return;
        }
    	// console.log(inResponse.main);
    	var temperatura = inResponse.main;
    	var tiempo = inResponse.weather[0];
    	var icon = tiempo.icon;
    	var grados = temperatura.temp - 273;
    	var descripcion = tiempo.description;
    	this.$.mapa.setAmbiente(icon, grados, descripcion);
    },

    //Paises Ordenados para hacer un Producto cartesiano con los paises que trae la API
	paises:[
		{id:"AT", nombre:"Austria"},
		{id:"AU", nombre:"Australia"},
		{id:"BE", nombre:"Bélgica"},
		{id:"BR", nombre:"Brasil"},
		{id:"CA", nombre:"Canadá"},
		{id:"CL", nombre:"Chile"},
		{id:"CY", nombre:"Chipre"},
		{id:"DE", nombre:"Alemania"},
		{id:"ES", nombre:"España"},
		{id:"FR", nombre:"Francia"},
		{id:"GB", nombre:"Gran Bretaña"},
		{id:"GR", nombre:"Grecia"},
		{id:"HU", nombre:"Hungría"},
		{id:"IE", nombre:"Irlanda"},
		{id:"IT", nombre:"Italia"},
		{id:"JP", nombre:"Japón"},
		{id:"LT", nombre:"Lituania"},
		{id:"LU", nombre:"Luxemburgo"},
		{id:"MX", nombre:"México"},
		{id:"NO", nombre:"Noruega"},
		{id:"RU", nombre:"Rusia"},
		{id:"SE", nombre:"Suecia"},
		{id:"SI", nombre:"Slovenia"},
		{id:"US", nombre:"Estados Unidos"}
	]
});
