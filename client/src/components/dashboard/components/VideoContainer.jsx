import React, {Component} from 'react'
import P2P from 'socket.io-p2p'
import io from 'socket.io-client'


class VideoContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            video: []
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate(){

    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    handleStream = () => {
        const constraints = {
            audio: true,
            video: {
                width: {ideal: 300},
                height: {ideal: 150}
            }
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                
            })
    }

    render(){
        return(
            <div>
                {this.state.video}
            </div>
        )
    }
}