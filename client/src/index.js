import React from 'react';
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import other modules
import Favicon from 'react-favicon'

// import modules to configure router
// import {combineReducers, applyMiddleware, compose} from 'redux'
// import {Provider} from 'react-redux'
// // import {reduxReactRouter, routerStateReducer, ReduxRouter} from 'redux-react-router'
// import {BrowserRouter as Router, Route} from 'react-router-dom'

// import custom components
// import NavBar from './components/NavBar'
import Root from './router/Root'
import Logo from './res/favicon.png'

// const Routes = (
//
// )

const Application = (
    <div>
        <Favicon url={Logo}/>
        <Root/>
    </div>
)

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
