export const addUser = (user) => {
    return{
        type: 'add_user',
        member: user
    }
}

export const createSocket = (socket) => {
    return {
        type: 'create_socket',
        newSocket: socket
    }
}