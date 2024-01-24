<template>
	<div div class="divSize">
		<v-expansion-panels dark class="ExPanel">
			<v-expansion-panel class="ClosedExPanel">
				<v-expansion-panel-header>
					<div>
						<v-icon> mdi-earth-arrow-right </v-icon>
					</div>
					<template #actions>
						<v-icon> mdi-chevron-down</v-icon>
					</template>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<h2>Region</h2>
					<!-- <v-radio-group v-model="selectedRegion" @change="$emit('region', selectedRegion)">
						<v-radio
							color="primary"
							v-for="(item, key) of Object.entries(availableRegions)"
							:key="key"
							:label="item.name"
							:value="key"
						></v-radio>
					</v-radio-group> -->
					<v-row>
						<v-col cols="12" sm="6" md="6" lg="6" xl="6">
							<!-- <v-autocomplete
								:items=""
								outlined
								dense
								@update:search-input="handleInput"
								v-model="airportIcao"
								label="Airport"
								@keydown.enter="onEnterPressed"
							></v-autocomplete> -->
						</v-col>
						<v-col cols="12" sm="6" md="6" lg="6" xl="6">
							<v-btn light @click="onEnterPressed"> <v-icon>mdi-near-me</v-icon></v-btn>
						</v-col>
					</v-row>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
import { regions } from '@/plugins/leaflet';
export default {
	name: 'RegionControl',
	data() {
		return {
			airportIcao: '',
			tempInput: null,
			regions,
			selectedRegion: undefined,
		};
	},
	props: {
		centerControl: { type: Object, required: true },
		zoomControl: { type: Number, required: true },
	},
	watch: {
		centerControl() {
			// setTimeout(() => {
			// 	if (this.airportIcao === this.tempInput && this.tempInput !== null) {
			// 		if (
			// 			!this.$_.isEqual(
			// 				{
			// 					lat: this.getAirportByIcaoCode(this.airportIcao).latitude.toFixed(1),
			// 					lng: this.getAirportByIcaoCode(this.airportIcao).longitude.toFixed(1),
			// 				},
			// 				{
			// 					lat: this.centerControl.lat.toFixed(1),
			// 					lng: this.centerControl.lng.toFixed(1),
			// 				}
			// 			)
			// 		) {
			// 			this.airportIcao = null;
			// 			this.tempInput = null;
			// 		}
			// 	}
			// }, 200);
		},
		zoomControl() {
			if (this.zoomControl !== 12) {
				this.airportIcao = null;
			}
		},
	},

	methods: {
		handleInput(value) {
			this.tempInput = value;
		},
		onEnterPressed() {
			// setTimeout(() => {
			// 	if (this.airportIcao === this.tempInput && this.tempInput !== null) {
			// 		this.$emit('mapCenterZoom', {
			// 			center: {
			// 				latitude: this.getAirportByIcaoCode(this.airportIcao).latitude,
			// 				longitude: this.getAirportByIcaoCode(this.airportIcao).longitude,
			// 			},
			// 			zoom: 12,
			// 		});
			// 	}
			// }, 100);
		},
	},
};
</script>

<style scoped>
.ExPanel {
	background-color: #363636;
	opacity: 0.8;
}

.ClosedExPanel > * {
	padding-top: 0px;
	padding-right: 10px;
	padding-bottom: 0px;
	padding-left: 10px;
}

.divSize {
	z-index: 500;
	display: flex;
	align-items: center;
	position: absolute;
	top: 10px;
	left: 50%;
}
</style>
