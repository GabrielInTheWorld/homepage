import React from 'react'
// import {NavLink} from 'react-router-dom'

// import css-styling
import '../../style/navigation/NavigationBar.css'

class NavigationBar extends React.Component{
    componentDidMount(){
        console.log("props:", this.props.children)
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