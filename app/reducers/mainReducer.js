import * as types from './../constant/actionTypes';

const initState = {
    count: 0
}

let mainReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD:
            return Object.assign({}, state, {
                count: state.count + action.count
            });
        case types.REMOVE:
            return Object.assign({}, state, {
                count: state.count - action.count
            })
        default:
            return state;
    }
}

export default mainReducer;

