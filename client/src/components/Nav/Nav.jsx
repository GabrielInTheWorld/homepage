import React, {Component} from 'react'
import PropTypes from 'prop-types'

// custom components
// import Sidebar from "./Sidebar";

// import styling
import '../../style/navigation/NavigationBar.css'


export default class Nav extends Component{
    // componentDidMount(){
    //     console.log("Nav:", this.props)
    // }

    components = () => {
        // if(this.props.children){
        //     // console.log("id: ", document.getElementById(this.props.id.toString()))
        //     const backgroundStyle = {
        //         position: "fixed",
        //         height: "100%",
        //         backgroundColor: "#009",
        //         width: "200px",
        //         zIndex: -5,
        //         top: 0,
        //         left: 0
        //     }
        //     return (
        //         <div>
        //             <div style={backgroundStyle}></div>
        //             <a className="Nav" id={this.props.id} href={this.props.to} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>{this.props.text}</a>
        //             <Sidebar id={this.props.sidebar} >{this.props.children}</Sidebar>
        //         </div>
        //     )
        // }else{
        //     return <a className="Nav" id={this.props.id} href={this.props.to}>{this.props.text}</a>
        // }
        return <a className="Nav" id={this.props.id} href={this.props.to}>{this.props.text}</a>
    }

    // onMouseOver = (e) => {
    //     let sidebar = document.getElementById(this.props.sidebar)
    //     sidebar.style.display = "block"
    //     sidebar.style.left = "200px"
    // }
    //
    // onMouseLeave = (e) => {
    //     let sidebar = document.getElementById(this.props.sidebar)
    //     sidebar.style.left = "0"
    //     // sidebar.style.display = "none"
    // }

    render(){
        return(
            this.components()
        )
    }
}

Nav.propTypes = {
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}