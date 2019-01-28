import { UPDATE_TEXT } from './actionTypes';

export const updateText = text => {
    return {
        type: UPDATE_TEXT,
        payload: text
    }
}