var SocketReducer = (state = {
    socket: null
}, action) => {
    switch (action.type){
        case "create_socket":
            return {
                ...state, socket: action.newSocket
            }
        default:
            return state
    }
}

export default SocketReducer