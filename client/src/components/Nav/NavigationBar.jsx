import React from 'react'
// import {NavLink} from 'react-router-dom'

// import css-styling
import '../../style/navigation/NavigationBar.css'

class NavigationBar extends React.Component{
    componentDidMount(){
    }

    render(){
        const sideNav = {
            height: "100%",
            width: 200,
            position: "fixed",
            zIndex: "2",
            top: 0,
            left: 0,
            backgroundColor: "#2d2d2d",
            boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.2)",
            overflowX: "hidden",
            paddingTop: 20
        }
        return(
            <div className="container">
                <div style={sideNav}>{this.props.children}</div>
            </div>
        )
    }
}

export default NavigationBar