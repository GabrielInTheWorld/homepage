import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import custom components
import App from '../App'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dummy from '../components/Dummy'
import Dashboard from '../components/dashboard/Dashboard'

const style = {
    height: "88vh"
}

const Root = () => (
    <Router>
        <div>
            <NavBar/>
            <div style={style}>
                <Route exact path="/" component={App}/>
                <Route path="/dummy" component={Dummy} />
                <Route path="/pandp" component={Dashboard} />
            </div>
            <Footer/>
        </div>
    </Router>
)

export default Root