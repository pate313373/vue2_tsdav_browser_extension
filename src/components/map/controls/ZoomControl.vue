<template>
	<div class="control">
		<l-control v-bind="$attrs">
			<div>
				<v-btn class="d-block" dark color="mapButton" @click="zoom++">
					<v-icon> mdi-plus </v-icon>
				</v-btn>
				<v-btn class="d-block" dark color="mapButton" @click="zoom--">
					<v-icon> mdi-minus </v-icon>
				</v-btn>
			</div>
		</l-control>
	</div>
</template>

<script>
import { LControl } from 'vue2-leaflet';
export default {
	name: 'ZoomControl',
	components: { LControl },
	props: {
		value: {
			type: Number,
			required: true,
		},
	},
	computed: {
		zoom: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit('input', value);
			},
		},
	},
};
</script>

<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
	opacity: 0.7;
	width: 36px;
	min-width: 36px;
	height: 36px;
	border-radius: 4px;
	padding: 0px;
}
</style>
