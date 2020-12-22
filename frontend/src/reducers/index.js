import { combineReducers } from 'redux'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer

// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers
