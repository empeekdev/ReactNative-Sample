const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const WAIT = 20;
const ID = ()=> '_' + Math.random().toString(36).substr(2, 9);

let comments = [],
    items = [];


function fetchItems() {
    return sleep(WAIT).then(() => {
        return [...items];
    })
}

function fetchComments(itemID) {
    return sleep(WAIT).then(() => {
        return [...comments.filter(comment => comment.parentId === itemID)];
    })
}

function addItem(itemPayload) {
    const item = {id: ID(), comments_count: 0, ...itemPayload};
    items.push(item);
    return sleep(WAIT).then(() => {
        return item;
    })
}

function addComment(commentObject) {
    const comment = Object.assign({}, {id: ID()}, commentObject);
    comments.push(comment);
    items = items.map((item)=>{
        return item.id === commentObject.parentId ? {...item, comments_count: item.comments_count + 1 } : item;
    });
    return sleep(WAIT).then(() => {
        return comment;
    })
}

function deleteItem(id) {
    items = items.filter(item =>{
        return item.id !== id;
    });
    return sleep(WAIT).then(() => {
        return true;
    })
}

export default {
    fetchItems,
    fetchComments,
    addItem,
    addComment,
    deleteItem,
}
