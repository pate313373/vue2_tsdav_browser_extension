import renderContent from '../renderContent';

import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import { vuetify } from '@/plugins';

import App from './App.vue';

Vue.use(PiniaVuePlugin);

renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
	new Vue({
		pinia: createPinia(),
		vuetify,
		render: (h) => h(App),
	}).$mount(appRoot);
});
