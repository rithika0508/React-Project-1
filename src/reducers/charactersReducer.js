import React from 'react';

const characterReducer = (state, action) => {
    switch(action.type) {
        case 'POPULATE_CHARACTERS':
            return action.characters
        default:
            return state
    }
}
export { characterReducer as default }