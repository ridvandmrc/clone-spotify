# Getting Started with Create React App
## Environment Variable 

In order to work the application you have define **.env** file,

REACT_APP_SPOTIFY_CLIENT_ID ==> Mandatory

REACT_APP_SPOTIFY_REDIRECT_URL ==> optional if you use different port from 3000 

you can define it but initially 'http://localhost:3000/loggedin'

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start:docker`

it should create the docker images that named dockerized-spotify and deploy the application 3000 port directy
## Additional thing

* used Authorization flow
* used functional component
* provided service based approach
* added utils aspecially to use http calls
* dockerized to application
### Flow explainer by gif


![](./screen-capture.gif)