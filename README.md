# Your Very Own Address Book 
This is a basic address book built with following:

* React 16.11
* React Hooks
* Jest / Enzyme

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Where is my address book

This project is deployed on Netlify for you to view and click around. Visit this URL https://react-address-book.netlify.com/ <br />

If you would like to run it locally, follow these instructions:
1. You will need Node.js and npm installed on your machine. I have built and tested the application using Node.js version 10.16.3 and npm version 6.9.0. Download link is here https://nodejs.org/download/release/v10.16.3/. Do you want to use yarn? I'm sure you can.
2. Open a terminal and switch to project directory
3. Install dependencies using `npm install`
4. Run `npm start` and go to http://localhost:3000 in browser
5. Run `npm test` and press `a` to see test results

Further details about available scripts and tests are mentioned below.

## Available Scripts
 
In the project directory, you can run:

### `npm install`

You should run this first to install project dependencies using npm.

### `npm start`

Runs the app in the development mode.<br />
Your browser should start automatically by default. If it doesn't, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
Press `a` to run all tests. You should see the output of the tests from there.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
Polyfills for IE11 are not currently included. Please use latest version of Google Chrome, Mozilla Firefox or Microsoft Edge browsers.

## What has been done
* You can do following with this app:
  * Add a new person (first name, last name, department and a phone number)
  * Search address book by department
  * Search address book by name
  * Delete an entry from address book
  * Sort addresses by last name
* Have added two custom hooks which allow us to add new address and to store addresses. Filter and sort functionality is also provided by hooks.
* Address Book view 'uses' both hooks and passes props down to components for rendering
* Have added some unit tests for hooks and UI components to showcase testing approach
* Have added just enough UI components and styles to make the app useful

## Approach
* You might find the business logic approach a bit unusual as compared to most production React apps at the moment. The solution relies on React Hooks to provide the props and callbacks the views can 'use'. This is done specifically to improve code composition and follow better functional programming pattern while avoiding classes.
* I have added a UI library for base level user interface components.
* My focus was to showcase React app architecture and building business logic in React using Hooks

## What's there for future
* Sorting is done in a very basic manner. The sorting function can be generalized. For very large arrays, it is better to go for binary sorting.
* Filtering is done using a simple search on strings. A better option would be to use [Fuse](https://github.com/krisk/fuse)
* Have not done much work on responsive styling. Can do more there with grid, typography and overall styles
* Can improve unit tests throughout the app
* Project is using create-react-app tool for development and build. While this is easy to use, it may not be feasible option in an environment where we need customisations to build steps for CI/CD. A custom webpack configuration would be needed otherwise.
* UI Library should be linked to components in design system with storybook or something similar.
* Animations can be added as required 
* Would need React Router for routing
