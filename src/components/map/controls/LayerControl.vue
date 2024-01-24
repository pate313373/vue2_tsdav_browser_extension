<template>
	<div>
		<l-control v-bind="$attrs">
			<v-expansion-panels dark class="ExPanel">
				<v-expansion-panel class="ClosedExPanel">
					<v-expansion-panel-header>
						<template #actions>
							<!-- alternative: mdi-cog-outline -->
							<v-icon> mdi-chevron-down</v-icon>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<!-- {{ Object.entries(tiles).map((entry) => ({ key: entry[0], ...entry[1] })) }} -->
						<v-row>
							<v-col cols="6" sm="6" md="6" lg="6" xl="6">
								<h2 class="text--white">Map</h2>
								<v-radio-group v-model="selectedTile">
									<v-radio
										color="primary"
										v-for="(tile, key) of tiles"
										:key="key"
										:label="tile.name"
										:value="tile"
									></v-radio>
								</v-radio-group>
							</v-col>
							<v-col cols="6" sm="6" md="6" lg="6" xl="6">
								<h2>Layers</h2>
								<v-checkbox
									color="primary"
									v-for="(item, key) of overlays"
									v-model="selectedOverlays"
									:label="item.name"
									:key="key"
									:value="item"
									hide-details
								></v-checkbox>
							</v-col>
						</v-row>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</l-control>

		<l-tile-layer :url="selectedTile.url" :attribution="selectedTile.attribution" />
		<l-tile-layer
			v-for="(key, index) of selectedOverlays"
			:key="index"
			:url="overlays[key].url"
			:opacity="overlayOptions[key].opacity"
			:name="overlays[key].name"
			:tms="typeof overlays[key].tms !== 'undefined' ? overlays[key].tms : undefined"
			:detect-retina="typeof overlays[key].detectRetina !== 'undefined' ? overlays[key].detectRetina : undefined"
			:subdomains="typeof overlays[key].subdomains !== 'undefined' ? overlays[key].subdomains : undefined"
		/>
	</div>
</template>
<script>
import { tiles, overlays } from '@/plugins/leaflet';
import { LControl, LTileLayer } from 'vue2-leaflet';
export default {
	name: 'LayerControl',
	components: { LControl, LTileLayer },
	data() {
		return {
			tiles,
			selectedTile: Object.values(tiles)[0],
			overlays,
			selectedOverlays: [],
		};
	},
	watch: {
		selectedTile() {
			console.log('selectedTile', this.selectedTile);
		},
	},
};
</script>

<style scoped>
.ExPanel > * {
	background-color: #363636;
	opacity: 0.8;
}

.ClosedExPanel > * {
	opacity: 0.7;
	padding-top: 0px;
	padding-right: 10px;
	padding-bottom: 0px;
	padding-left: 10px;
}
</style>
