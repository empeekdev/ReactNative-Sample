import {createActions} from 'redux-actions'
import {
    REQUEST_ITEMS,
    REQUEST_COMMENTS,
    ADD_ITEM,
    DELETE_ITEM,
    ADD_COMMENT,
} from '../constants'


export default createActions(
    REQUEST_ITEMS,
    REQUEST_COMMENTS,
    ADD_ITEM,
    DELETE_ITEM,
    ADD_COMMENT,
);

