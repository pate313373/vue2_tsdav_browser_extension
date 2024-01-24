<template>
	<div>
		<!-- just an idea to add the following to "l-map": @click="selectMapObject()" -->
		<l-map
			class="map"
			:center.sync="center"
			:min-zoom="selectedTile.minZoom"
			:max-zoom="selectedTile.maxZoom"
			:zoom.sync="zoom"
			:bounds.sync="bounds"
			:max-bounds="maxBounds"
			ref="map"
			@ready="onMapReady()"
			:options="{ zoomControl: false }"
		>
			<layer-control position="topright"></layer-control>
			<zoom-control v-model="zoom" position="topleft"></zoom-control>
			<!-- <region-control :center-control="center" :zoom-control="zoom" @mapCenterZoom="setCenterAndZoom"></region-control>
			<event-layer></event-layer> -->
		</l-map>
	</div>
</template>
<script>
import RegionControl from './controls/RegionControl.vue';
import EventLayer from './EventLayer.vue';
import ZoomControl from './controls/ZoomControl.vue';
import LayerControl from './controls/LayerControl.vue';
import {
	LMap,
	// LControl,
	// LTileLayer,
	// LImageOverlay,
	// LFeatureGroup,
	// LTooltip,
	// LPopup,
	// LMarker,
	// LIcon,
	// LCircle,
	// LPolyline,
	// LControlZoom,
} from 'vue2-leaflet';

// import { debounce } from 'lodash';

export default {
	name: `EventMap`,
	components: { LMap, LayerControl, ZoomControl, RegionControl, EventLayer },
	props: {},
	data: () => ({
		maxBounds: [
			[-90, -230],
			[90, 270],
		],
		zoom: 4,
		center: { lat: 50, lng: 15 }, //ToDo: Get this from user settings or last state of user
		isMapReady: false,
		bounds: null,
		// eventsUpdateIntervalId: null,
		selectedTile: {
			minZoom: 3,
			maxZoom: 18,
		},
	}),
	computed: {},
	watch: {
		zoom() {},
		center() {},
		bounds() {
			// this.updateEventStates();
		},
	},
	methods: {
		setCenterAndZoom(region) {
			const { center, zoom } = region;

			setTimeout(() => {
				this.zoom = zoom;
			}, 500); //300 min on different zoom
			this.center = {
				lat: center.latitude,
				lng: center.longitude,
			};
		},
		onMapReady() {
			const map = this.$refs.map.mapObject;
			// map.on('popupclose', () => this.unselectMapObjectHandle());
			this.isMapReady = true;
			// const self = this;

			// this.getEventsByBounds();
			// this.eventsUpdateIntervalId = setInterval(() => {
			// 	this.getEventsByBounds();
			// }, 2 * 1000);
			console.log('Map component ready.', map);
		},
		// getEventsByBounds: debounce(
		// 	function () {
		// 		if (this.isMapReady) {
		// 			const bounds = this.$refs.map.mapObject.getBounds();
		// 			this.loadEvents(bounds);
		// 		}
		// 	},
		// 	200,
		// 	{
		// 		leading: true,
		// 		trailing: false,
		// 	}
		// ),
	},
	beforeDestroy() {
		if (this.eventsUpdateIntervalId) clearInterval(this.eventsUpdateIntervalId);
	},
	mounted() {
		console.log('EventMap mounted.');
	},
};
</script>

<style scoped>
.map {
	display: block;
	height: 400px;
	width: 600px;
	z-index: 1;
}
</style>
