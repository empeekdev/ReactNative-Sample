export const minValue = value => {
    let error = {};
    if(!value) {
        return error;
    }
    if(value.length > 3) {
        return undefined;
    } else {
        return error;
    }
};
