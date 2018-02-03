var MemberReducer = (state = {
    members: []
}, action) => {
    // let members = this.members
    switch (action.type){
        case "add_user":
            return [
                ...state, action.member
            ]
        default:
            return state
    }
}

export default MemberReducer