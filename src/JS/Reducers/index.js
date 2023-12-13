import {combineReducers} from 'redux'
import userReducer from './Reducers'
import PubReducer from './PubReducer'
const rootReducer=combineReducers({userReducer,PubReducer})
export default rootReducer