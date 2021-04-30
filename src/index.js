import React from "react";    // import react
import ReactDOM from "react-dom";  // import react-dom
import App from "./App";  // component
import Craft from "./components/craft/Craft";  // component
import BaseLayout from './components/layout/BaseLayout'; // import the BaseLayout component(covers all pages)
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // routers and switches for the render
import reducer from "./reducers/reducer";  // import the reducer
import { createStore } from 'redux' //Redux.createStore()
import { Provider } from 'react-redux' // makes available the state by wraping all components
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap link
import "./assets/global.css";  // import custom css
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";


// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faEdit)


// save state to local storage (convert to string and save)
const saveToLocalStorage = (reduxGlobalState) => {
  try {
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('epreturns', serializeState)
  }
  catch (e) {
    console.log(e);
  }
}

// load data from local storage (return => if it exist => read and parse | if doesn't exist set initial value of store)
const loadFromLocalStorage = () => {
  const serializeState = localStorage.getItem('epreturns');
  if (serializeState === null) {
    return {
      2021: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2022: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2023: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2024: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2025: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2026: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2027: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2028: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2029: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      },
      2030: {
        craft: [],
        hunt: [],
        mine: [],
        craftMu: [],
        huntMu: [],
        mineMu: [],
      }
    }
  }
  else {
    return JSON.parse(serializeState) // JS object
  }
}


// call the load function and then pass it to the store
const persistedState = loadFromLocalStorage();

// Initializing Redux Store by passing the reducer, initial state and ReduxDev tools link
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// subscribes the saveToLocalStorage to the store (every time the state changes the localStorage is updated)
store.subscribe(() => {
  saveToLocalStorage(store.getState());
})


// default rendering method on the root element (must pass redux store instance to provider via "store")
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-right" autoClose={2000} newestOnTop />
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/craft" component={Craft} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
