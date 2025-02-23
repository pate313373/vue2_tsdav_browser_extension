import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import { vuetify } from '@/plugins';

import App from './App.vue';

Vue.use(PiniaVuePlugin);

new Vue({
	pinia: createPinia(),
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
