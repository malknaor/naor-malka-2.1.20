# forecaster
forecaster is a weather app based on accu weather api

## Features
* current location based on user geolocation 
* search autocomplete
* favorites saved in local storage
* light / dark theme  
* &#8451; | &#8457;

## Dependencies
[redux](https://redux.js.org/)  
[react-redux](https://github.com/reduxjs/react-redux)  
[axios](https://github.com/axios/axios)  
[semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React#readme)

## Project Structure
```
.
├── public
└── src
    ├── actions
    ├── api
    ├── App
    │   ├── common
    │   │   ├── AsyncComponent
    │   │   ├── AutoSuggestionsInput
    │   │   ├── CurrentWeatherCard
    │   │   ├── DropDownMenu
    │   │   ├── FavoriteButton
    │   │   ├── LocationDiplayCard
    │   │   ├── SearchBar
    │   │   ├── ToggleButton
    │   │   └── WeatherCard
    │   ├── Containers
    │   ├── ErrorBoundary
    │   ├── Favorites
    │   ├── Home
    │   └── Navigation
    ├── appDataprovider
    ├── assets
    │   └── images
    ├── reducers
    ├── services
    ├── store
    └── utils
```
## Deployment
Deployed with firebase  
[deployed app](https://forecaster-1b540.firebaseapp.com)
