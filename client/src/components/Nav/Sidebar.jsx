import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../style/navigation/NavigationBar.css'

export default class Sidebar extends Component{

    componentDidMount(){
        console.log("sidebar.props:", this.props)
    }

    onMouseOver = (e) => {
        document.getElementById(this.props.id).style.left = "200px"
    }

    onMouseLeave = (e) => {
        document.getElementById(this.props.id).style.left = "0px"
    }

    render(){
        const style = {
            position: "fixed",
            width: 200,
            height: "100%",
            zIndex: -10,
            padding: "20px",
            backgroundColor: "#404040",
            top: "0",
            left: "0",
            boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.1)"
        }

        return(
            <div
                id={this.props.id}
                style={style}
                className="Sidebar"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>{this.props.children}</div>
        )
    }
}

Sidebar.propTypes = {
    id: PropTypes.string.isRequired
}