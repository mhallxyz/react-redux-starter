import { UPDATE_TEXT } from '../actions/actionTypes';

const INITIAL_STATE = {
    text: 'test'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TEXT:
            return {
                ...state,
                text: action.payload
            }
        default:
            return state
    }
}