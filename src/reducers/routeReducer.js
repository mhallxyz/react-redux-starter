import { combineReducers } from 'redux';
import textChanged from './textChangeReducer'

export default combineReducers({
    text: textChanged
})