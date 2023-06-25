# Getting Started with Wortle
This project is an amended version of Wordle created using [Create React App](https://github.com/facebook/create-react-app) and published via [Github pages](https://docs.github.com/en/pages).

## Production

Live version of the app can be found here: [https://clairek.github.io/wordle-adapted/](https://clairek.github.io/wordle-adapted/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000/wordle-adapted](http://localhost:3000/wordle-adapted) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm run deploy`

This will trigger the `predeploy` and `deploy` scripts to run.

The `predeploy` script builds the app for production and stores in the `build` folder.

The `deploy` script will push the `build` folder contents to a new commit on `gh-pages` branch of the repo.

By running:  
``$ npm run deploy -- -m "This is a customised commit"``  
you can add a specific commit message, otherwise the commit message will be `Updates`. 

