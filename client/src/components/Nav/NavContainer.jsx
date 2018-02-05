/**
 * class to wrapp navs into a subfolder instead of under a link,
 * so the user will not be redirected if he clicks on the container
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

// import custom components
import Sidebar from "./Sidebar";
import {Arrow} from '../CoolComponents'

// import the css
import '../../style/navigation/NavigationBar.css'
import NavIcon from "./NavIcon";

export default class NavContainer extends Component{
    componentDidMount(){

    }

    getComponents = () => {
        const backgroundStyle = {
            position: "fixed",
            height: "100%",
            backgroundColor: "#2d2d2d",
            boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.2)",
            width: "200px",
            zIndex: -5,
            top: 0,
            left: 0
        }

        const pStyle = {
            verticalAlign: "middle",
            display: "inline"
        }

        return (
            <div>
                <div style={backgroundStyle}></div>
                <div
                    className="Nav NavContainer"
                    id={this.props.id}
                    onMouseOver={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}>
                    <NavIcon image={this.props.icon} />
                    <p style={pStyle}>{this.props.text}</p>
                    <Arrow site="right"/>
                    </div>
                <Sidebar id={this.props.sidebar}>{this.props.children}</Sidebar>
            </div>
        )
    }

    onMouseOver = (e) => {
        let sidebar = document.getElementById(this.props.sidebar)
        // sidebar.style.display = "block"
        sidebar.style.left = "200px"
    }

    onMouseLeave = (e) => {
        let sidebar = document.getElementById(this.props.sidebar)
        sidebar.style.left = "0"
    }

    render(){
        return(
            this.getComponents()
        )
    }
}

NavContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    id: PropTypes.string.isRequired,
    sidebar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}