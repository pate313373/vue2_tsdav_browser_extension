import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const options = {
	theme: {
		dark: false,
		options: {
			customProperties: true,
		},
		themes: {
			dark: {
				primary: '#007cd6',
				secondary: '#d6d7d9',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			},
			light: {
				primary: '#272727',
				secondary: '#d6d7d9',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			},
		},
	},
};

export const vuetify = new Vuetify(options);
