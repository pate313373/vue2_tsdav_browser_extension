# documentation references

- Chrome Extensions: https://developer.chrome.com/docs/extensions
- Vue 2: https://v2.vuejs.org/v2/guide/
- Pinia: https://pinia.vuejs.org/introduction.html
- leaflet (Map): https://vue2-leaflet.netlify.app/
- Vuetify 2: https://v2.vuetifyjs.com/en/introduction/why-vuetify/
- Vuetify Calendar UI Component: https://v2.vuetifyjs.com/en/components/calendars/
- tsdav (Calendar API): https://tsdav.vercel.app/docs/intro
- ics (Calendar Event Wrapper): https://github.com/adamgibbons/ics
- luxon (Date and Time Wrapper): https://moment.github.io/luxon/#/?id=luxon

# development
## commands
Run this once to install dependencies, listed in package.json. 
```sh
npm install
```

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts).
MAKE SURE YOU RUN THIS COMMAND FIRST AND "npm run serve:chrome", later when the initial build succeeded.
```sh
npm run watch
```

Loads the contents of the dist directory, which is created and kept current via "npm run watch", into the specified browser.
```sh
npm run serve:chrome
```