
# Google News PWA Demo
A no-frills PWA (Progressive Web Application) to demonstrate various caching and routing strategies with [Workbox](https://developers.google.com/web/tools/workbox/modules/)

### Setup

This project bootstraps from [Monaca](https://monaca.io/)'s PWA template.  While a Monaca account isn't needed to preview or build the app, a free account is needed to use some of the features of the monaca-cli tools, and to publish the app to their cloud hosting.  
<sup>_the developer isn't affiliated or paid to endorse Monaca; "I just think that their tools are cool!"_</sup>

The app is designed to use the [News API](https://newsapi.org/) to pull top news stories from the Google news feed agregator.  
Get a New `API_KEY` by setting up an account.  

On the first line in `main.js`, include a **secret** News api key.  

```
const API_KEY = (your API key will go here, without parenthesis!)
```

### Installation

```
npm install monaca -g
git clone git@github.com:JoNilsson/demo-workbox-pwa.git google-news-pwa
cd google-news-pwa
npm i && npm run build
```

`caveat: building this on mac OS, will require XCode and the XCode CLI tools to be installed`


### Develop & Deploy

To start a hot-reloading version of the project run:

```
npm run dev
```

This will start the services and open a webbrowser to `localhost:8080`  
Look to the console to see:

```
[Browsersync] Access URLs:
 ------------------------------------
       Local: http://localhost:8080
    External: http://10.2.31.108:8080
 ------------------------------------
          UI: http://localhost:8081
 UI External: http://localhost:8081
 ------------------------------------
[Browsersync] Serving files from: www/
[Browsersync] Watching files...
```
_Access the Browswersync UI @ `http://localhost:8081`_

Open the `External` URL on your mobile devices browser to see the App.  Interactions between the development browser and the mobile device will be sync'd via the awesome magic of the [Browsersync](https://www.browsersync.io/) integration. 
Use the 'Add to Home Screen' or similar feature of the mobile device browser to psudo-"_Install_" the PWA app to the device.  A new icon will be added to the device home screen.  Clicking the newly added icon will open the app in true PWA application mode.  Notice the lack of a browser address bar, etc. 