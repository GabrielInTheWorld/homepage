import React, {Component} from 'react'
import P2P from 'socket.io-p2p'
import io from 'socket.io-client'
import {connect} from 'react-redux'

import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

import ChatBox from './components/ChatBox'

import {addUser, createSocket} from "./store/actions/index"

import '../../style/dashboard.css'

let socket
let p2p


/**
 * TODO: change the streaming way to p2p (also with chatting)
 * TODO: create the p2p-component in this component and set it into the redux-store
 */

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            textValue: ''
        }

        socket = io()
        this.props.createSocket(socket)

        // console.log("this socket: ", socket, this.props.socket)

        // p2p = new P2P(socket)
        // p2p.on("ready", () => {
        //     p2p.usePeerConnection = true
        //     p2p.emit("peer-obj", {peerId: "AxhI9Lkj8"})
        // })

        const constraints = {
            audio: true,
            video: {
                width: {ideal: 300},
                height: {ideal: 150}
            }
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                // console.log("getUserMedia: ", constraints)
                // this.gotMedia(stream)

                p2p = new P2P(socket, {peerOpts: {stream: stream, numClients: 10}})
                // let self = document.getElementById("self")
                // self.src = window.URL.createObjectURL(stream)
                // self.play()

                p2p.on("ready", () => {
                    console.log("ready")
                    p2p.usePeerConnection = true
                })

                p2p.emit("ready", {peerId: "AxhI9Lkj8"})

                p2p.on("peer-msg", (data) => {
                    console.log("message: ", data)
                })
                p2p.on("stream", (data) => {
                    console.log("stream: ", data)

                    var video = document.getElementById("stream")
                    video.src = window.URL.createObjectURL (data)
                    video.play()
                })
            })
            .catch((error) =>{
                console.log("Something went wrong: ", error)
            })
        // p2p = new P2P(socket)
        this.handleReceiveMessages()

        // this.startStream()
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount", this.props.socket)
    }

    handleReceiveMessages = () => {
        socket.on("time", (data) => {
            console.log("time: ", data)
        })

    }

    onChange = (event) => {
        this.setState({textValue: event.target.value})
    }

    sendMessage = (textArea) => {
        console.log("textArea: ", textArea)
        p2p.emit("peer-msg", {value: this.state.textValue})
    }

    render(){
        return(
            <div id="rootDashboard">
                Pen and Paper Dashboard

                <form>
                    <FormGroup>
                        <ControlLabel>Your message:</ControlLabel>
                        <FormControl
                            ref={(input) => {this.textArea = input}}
                            value={this.state.textValue}
                            onChange={this.onChange}
                            component="textarea"
                            placeholder="Type your message here..." />
                    </FormGroup>

                    <Button onClick={() => this.sendMessage(this.state.textValue)}>Send</Button>
                </form>

                <ChatBox/>
                <video width={640} height={480} id="stream" />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log("mapStateToProps: ", state, ownProps)
    return{
        socket: state.socket,
        members: state.members
    }
}

const mapDispatchToProps = (dispatch) => {
    // console.log("mapDispatchToProps: ", dispatch)
    return{
        createSocket: socket => dispatch(createSocket(socket)),
        addUser: user => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)