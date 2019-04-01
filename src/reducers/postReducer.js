import {FETCH_POSTS, ADD_POST} from '../actions/actiontypes';

const initalState = {
    items: [],
    item: {}
};

export default function(state = initalState, action) {
    switch(action.type) {
        case FETCH_POSTS: 
            return {
                ...state,
                items: action.payload
            }
        case ADD_POST: 
            return {
                ...state,
                item: action.payload
            }
        default: 
            return state;
    }
}