<template>
	<div>
		<img :src="imageUrl" height="45" alt="" />
		<h1>
			<slot></slot>
		</h1>
		<v-btn @click="increment">Clicks: {{ count }}</v-btn>
		<v-btn @click="increment" icon><v-icon>mdi-plus</v-icon></v-btn>
	</div>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
	data() {
		return {
			count: 0,
			imageUrl: new URL(logo, import.meta.url).href,
		};
	},
	methods: {
		increment() {
			this.count = this.count + 1;
		},
	},
};
</script>

<style>
h1 {
	margin: 5px;
}

button {
	margin-top: 10px;
}
</style>
