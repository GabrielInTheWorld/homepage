import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class NavIcon extends Component{
    state = {
        image: ""
    }

    componentWillReceiveProps(nextProps){
        this.setState({image: nextProps.image})
    }

    render(){
        let width = 32
        let height = 32
        let backgroundStyle = {
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