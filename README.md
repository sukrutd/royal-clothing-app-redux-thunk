## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes.

## Heroku Deployment Process

### `heroku login`

### `heroku create royal-clothing-app --buildpack https://github.com/mars/create-react-app-buildpack.git`

This buildpack deploys a React app as a static web site. The Nginx web server provides optimum performance and security for the runtime.

### `git push heroku master`

### App Url

https://royal-clothing-app.herokuapp.com
