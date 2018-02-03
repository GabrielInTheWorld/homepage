const express = require("express")
const path = require("path")
const socketIO = require("socket.io")
const p2p = require('socket.io-p2p-server').Server

const app = express()

const user = {
    name: "gabo_the_legend",
    password: "PrettyLittleLiars22"
}

const port = process.env.PORT || 5000
const server = app.listen(port)

app.use(express.static(path.join(__dirname, "client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

let io = socketIO(server)
io.use(p2p)

io.on('connection', (socket) => {
    console.log("client connected.")

    socket.on("peer-msg", (data) => {
        console.log("received message from peer", data)
        socket.broadcast.emit("peer-msg", data)
    })

    socket.on('peer-obj', (data) => {
        console.log("got peer-obj: ", data)
    })

    socket.on('peer-msg', (data) => {
        console.log("got message: ", data)
        socket.broadcast.emit("peer-msg", data)
    })

    socket.on("stream", (data) => {
        console.log("got stream")
    })

    socket.on("disconnect", () => {
        console.log("client disconnected.")
    })
})

console.log(`Server is running on ${port}`)