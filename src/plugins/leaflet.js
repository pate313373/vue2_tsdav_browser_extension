import 'leaflet/dist/leaflet.css';
console.log('leaflet CSS loaded.');

export const regions = {
	northernEurope: {
		name: 'Northern Europe',
		position: { latitude: 65, longitude: 12 },
		zoom: 5,
	},
	centralEurope: { name: 'Central Europe', position: { latitude: 50, longitude: 15 }, zoom: 5 },
	southernEurope: { name: 'Southern Europe', position: { latitude: 40, longitude: 14 }, zoom: 5 },
	northAmerica: { name: 'North America', position: { latitude: 48, longitude: -110 }, zoom: 4 },
	centralAmerica: { name: 'Central America', position: { latitude: 11, longitude: -90 }, zoom: 5 },
	carribean: { name: 'Carribean', position: { latitude: 14, longitude: -75 }, zoom: 5 },
	southAmerica: { name: 'South America', position: { latitude: -26, longitude: -60 }, zoom: 4 },
	africa: { name: 'Africa', position: { latitude: 2, longitude: 40 }, zoom: 4 },
	asia: { name: 'Asia', position: { latitude: 50, longitude: 110 }, zoom: 4 },
	southeastAsia: { name: 'South-East Asia', position: { latitude: -5, longitude: 115 }, zoom: 4 },
	oceania: { name: 'Oceania', position: { latitude: -25, longitude: 120 }, zoom: 5 },
};
export const overlays = {};
export const tiles = {
	esriWorldStreet: {
		name: 'Street',
		dark: false,
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
		minZoom: 3,
		maxZoom: 18,
		attribution:
			'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
	},
	openTopo: {
		//new Map
		name: 'Topography',
		dark: false,
		url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
		minZoom: 3,
		maxZoom: 16,
		attribution:
			'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
	},
	openGeo: {
		name: 'Geo-Info',
		dark: false,
		url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		minZoom: 3,
		maxZoom: 16,
		attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	},
	esriWorldTopo: {
		name: 'Topo',
		dark: false,
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
		minZoom: 3,
		maxZoom: 18,
		attribution:
			'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
	},
	esriWorldTerrain: {
		name: 'Terrain',
		dark: false,
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
		minZoom: 3,
		maxZoom: 9,
		attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
	},
	esriWorldImagery: {
		name: 'Imagery',
		dark: true,
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
		minZoom: 3,
		maxZoom: 18,
		attribution:
			'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
	},
	esriLight: {
		name: 'Light',
		dark: false,
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
		minZoom: 3,
		maxZoom: 16,
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	},
};
