import * as actionType from '../constants/actionTypes';

const boardReducer =  (board = [], action) => {
    switch (action.type) {
        case actionType.FETCH_BOARDS:
            return action.payload;
        case actionType.CREATE_BOARDS:
            return [ ...board, action.payload];
        case actionType.UPDATE_BOARDS:
            return board.map((boardFilter) => (boardFilter._id === action.payload._id ? action.payload : boardFilter));
        case actionType.DELETE_BOARDS:
            return board.filter((boardFilter) => boardFilter._id !== action.payload);
        default:
            return board;
    }
}

export default boardReducer;