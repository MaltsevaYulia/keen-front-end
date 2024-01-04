# ADMIN.BIKE-BOOKING.COM
This is an admin panel for a company that provides bicycle booking services.

Layout link: https://www.figma.com/file/pIU4QX9TlF6vOw1x1Vf8yB/ADMIN.BIKE-BOOKING.COM?node-id=105%3A108

Front-end deploy: maltsevayulia.github.io/keen-front-end/

App is able to do the following:

- user can add a bicycle with fields (ID, name, type, color, wheel size, price, description)
- added bicycle is displayed on the list of bicycles
- user can change the status of the bicycle (available/busy/unavailable) 
- user can remove a bicycle
- user can check stats on bicycles (number of bicycles, number of available bicycles, number of booked bicycles, average price of a bicycle)

## Stack

- *Front-end*: React, Redux, Redux Toolkit, Formik, Yup, HTML5, SCSS

## Setup
1. Use 18 LTS version of Node.js
2. Clone/download this repo
3. Install dependencies:
```bash
npm i
```
4. Change axios.defaults.baseURL in store/operations, if  you use your own server

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


---

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.


## Back-End

This application uses a server https://keen-back-end.onrender.com
Read more https://github.com/MaltsevaYulia/keen-back-end
