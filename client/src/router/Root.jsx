import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import custom components
import App from '../App'
// import NavBar from '../components/NavBar'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Dummy from '../components/Dummy'
import Dashboard from '../components/dashboard/Dashboard'
import configureStore from '../components/dashboard/store/ConfigureStore'

const site = {
    marginLeft: "200px"
}

const style = {
    height: "94.8vh"
}

const store = configureStore({
    socket: {},
    members: []
})

const Root = () => (
    <Provider store={store}>
        <Router>
            <div style={site}>
                <Navigation />
                <div style={style}>
                    <Route exact path="/" component={App}/>
                    <Route path="/dummy" component={Dummy} />
                    <Route path="/pandp" component={Dashboard} />
                    <Route path="/thegame" />
                    <Route path="/forum" />
                    <Route path="/blog" />
                    <Route path="/home" />
                </div>
                <Footer/>
            </div>
        </Router>
    </Provider>
)

export default Root