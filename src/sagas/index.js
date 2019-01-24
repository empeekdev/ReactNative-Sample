import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    REQUEST_ITEMS,
    REQUEST_ITEMS_ERROR,
    REQUEST_ITEMS_SUCCESS,
    ADD_COMMENT,
    ADD_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS,
    ADD_ITEM,
    ADD_ITEM_ERROR,
    ADD_ITEM_SUCCESS,
    DELETE_ITEM,
    DELETE_ITEM_ERROR,
    DELETE_ITEM_SUCCESS,
    REQUEST_COMMENTS,
    REQUEST_COMMENTS_SUCCESS,
    REQUEST_COMMENTS_ERROR,
    INCREMENT_COMMENTS_COUNT,
    ACTIVATE_LOADER,
} from '../constants'
import Api from '../api'

function* fetchItems() {
    try {
        const items = yield call(Api.fetchItems);
        yield put({type: REQUEST_ITEMS_SUCCESS, items: items});
    } catch (e) {
        yield put({type: REQUEST_ITEMS_ERROR, message: e.message});
    }
}
function* fetchComments(action) {
    try {
        const comments = yield call(Api.fetchComments, action.payload.itemID);
        yield put({type: REQUEST_COMMENTS_SUCCESS, comments: comments});
    } catch (e) {
        yield put({type: REQUEST_COMMENTS_ERROR, message: e.message});
    }
}
function* addItem(action) {
    try {
        const item = yield call(Api.addItem, action.payload);
        yield put({type: ADD_ITEM_SUCCESS, item: item});
    } catch (e) {
        yield put({type: ADD_ITEM_ERROR, message: e.message});
    }
}
function* addComment(action) {
    try {
        const comment = yield call(Api.addComment, action.payload);
        yield put({type: ADD_COMMENT_SUCCESS, comment: comment});
        yield put({type: INCREMENT_COMMENTS_COUNT, itemId: comment.parentId})
    } catch (e) {
        yield put({type: ADD_COMMENT_ERROR, message: e.message});
    }
}

function* deleteItem(action) {
    try {
        yield call(Api.deleteItem, action.payload);
        yield put({type: DELETE_ITEM_SUCCESS, item: action.payload});
    } catch (e) {
        yield put({type: DELETE_ITEM_ERROR, message: e.message});
    }
}



export default function* rootSaga() {
    yield takeEvery(REQUEST_ITEMS, fetchItems);
    yield takeEvery(REQUEST_COMMENTS, fetchComments);
    yield takeEvery(ADD_ITEM, addItem);
    yield takeEvery(ADD_COMMENT, addComment);
    yield takeEvery(DELETE_ITEM, deleteItem);
}
