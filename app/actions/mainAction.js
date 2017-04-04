import * as types from './../constant/actionTypes';
// let 声明的名称会在界面使用 
// export let main = (url, params, isLoading, isLoadMore, isRefreshing) => {
//     return dispatch => {
//
//         // 1.发出拉取数据的信号
//         dispatch(loadMainContent(isLoading, isLoadMore, isRefreshing));
//
//         // 2.请求网络
//         return HttpUtil.fetchGet(url, params,
//             (responseObj) => {
//                 dispatch(receiveMainContent(responseObj.result.bookList));
//                 console.info("success");
//             },
//             (error) => {
//                 dispatch(receiveMainContent([]));
//                 console.info("error" + error);
//             }
//         )
//     }
// }
export let main = (dispatch, ownPros) => {
    return {
        add: (number) => {
            dispatch(add1(number))
        },
        remove: (number) => dispatch(remove1(number))
    }
}

/**
 * Loading action
 */
let add1 = (number) => {
    return {
        type: types.ADD,
        count: number
    }
}

let remove1 = (number) => {
    return {
        type: types.REMOVE,
        count: number
    }
}