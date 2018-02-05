import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class NavIcon extends Component{
    state = {
        image: ""
    }

    componentWillReceiveProps(nextProps){
        // console.log("componentDidMount")
        this.setState({image: nextProps.image})
    }

    render(){
        console.log("render: ", this.state, this.props.image)
        let width = 32
        let height = 32
        let backgroundStyle = {
            // backgroundImage: this.props.image,
            width: 32,
            height: 32,
            display: "inline",
            marginRight: 5,
            float: "left"
        }
        return(
            <div style={backgroundStyle}>
                <img src={this.props.image} alt="" width={width} height={height}  />
            </div>
        )
    }
}

NavIcon.propTypes = {
    image: PropTypes.string.isRequired
}