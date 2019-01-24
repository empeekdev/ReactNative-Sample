import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';

import {
    ADD_ITEM,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_ITEM_SUCCESS,
    REQUEST_ITEMS,
    REQUEST_COMMENTS,
    REQUEST_COMMENTS_SUCCESS,
    REQUEST_ITEMS_SUCCESS,
    INCREMENT_COMMENTS_COUNT,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM,
} from '../constants'

function itemsReducer(state = [], action) {
    switch (action.type) {
        case REQUEST_ITEMS_SUCCESS:
            return action.items;
        case ADD_ITEM_SUCCESS:
            return [...state, action.item];
        case DELETE_ITEM_SUCCESS:
            return state.filter(item => item.id !== action.item);
        case INCREMENT_COMMENTS_COUNT:
            let newState = state.map((item) => {
                return item.id === action.itemId ? {...item, comments_count: item.comments_count + 1} : item;
            });
            return [...newState];
        default:
            return state;
    }
}

function commentsReducer(state = [], action) {
    switch (action.type) {
        case REQUEST_COMMENTS_SUCCESS:
            return action.comments;
        case ADD_COMMENT_SUCCESS:
            return [...state, action.comment];
        default:
            return state;
    }
}

function appReducer(state = {isLoading: false}, action) {
    switch (action.type) {
/*        case ADD_ITEM:
        case ADD_COMMENT:
        case REQUEST_ITEMS:
        case REQUEST_COMMENTS:
        case DELETE_ITEM:
            return {isLoading: true};*/
        case ADD_COMMENT_SUCCESS:
        case ADD_ITEM_SUCCESS:
        case REQUEST_COMMENTS_SUCCESS:
        case REQUEST_ITEMS_SUCCESS:
        case DELETE_ITEM_SUCCESS:
            return {isLoading: false};
        default:
            return state;
    }
}


export default combineReducers({
    items: itemsReducer,
    comments: commentsReducer,
    form: formReducer,
    appState: appReducer
})
