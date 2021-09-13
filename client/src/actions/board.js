import * as api from '../api/index.js';
import { CREATE_BOARDS, FETCH_BOARDS, UPDATE_BOARDS, DELETE_BOARDS } from '../constants/actionTypes.js';

export const createBoard = (board) => async (dispatch) => {
    try {
        const { data } = await api.createBoard(board);
        dispatch({ type: CREATE_BOARDS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getBoard = (workspaceId) => async (dispatch) => {
    try {
        const { data } = await api.getBoard(workspaceId);
        dispatch({ type: FETCH_BOARDS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const editBoard = (id, board) => async (dispatch) => {
    try {
        const { data } = await api.editBoard(id, board);
        dispatch({ type: UPDATE_BOARDS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteBoard = (id) => async (dispatch) => {
    try {
        await api.deleteBoard(id);
        dispatch({ type: DELETE_BOARDS, payload: id });
    } catch (error) {
        console.log(error);
    }
}