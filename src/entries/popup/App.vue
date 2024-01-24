<template>
	<v-app>
		<v-app-bar app>
			<v-app-bar-nav-icon @click="triggerMenuClick()"></v-app-bar-nav-icon>
			<v-app-bar-title>Calendar Creator</v-app-bar-title>
		</v-app-bar>
		<v-main>
			<PageContent> Popup </PageContent>
			<event-map></event-map>
		</v-main>
	</v-app>
</template>

<script>
import PageContent from '@/components/PageContent.vue';
import EventMap from '@/components/map/EventMap.vue';

export default {
	components: {
		PageContent,
		EventMap,
	},
	methods: {
		triggerMenuClick() {
			console.log('menu clicked');
		},
	},
};
</script>

<style>
main {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
