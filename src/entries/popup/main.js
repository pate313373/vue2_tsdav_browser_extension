import Vue from 'vue';
import { vuetify, pinia } from '@/plugins';

import App from './App.vue';

new Vue({
	pinia,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');

console.log('Vue app mounted.');
