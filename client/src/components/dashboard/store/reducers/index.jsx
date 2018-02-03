import {combineReducers} from 'redux'

import MemberReducer from './MemberReducer'
import SocketReducer from './SocketReducer'

const allReducers = combineReducers({
    members: MemberReducer,
    socket: SocketReducer
})

export default allReducers