import * as api from '../api/index.js';
import { CREATE_WORKSPACES, FETCH_WORKSPACES, FETCH_WORKSPACE, UPDATE_WORKSPACES, DELETE_WORKSPACES } from '../constants/actionTypes.js';

export const createWorkspace = (workspace) => async (dispatch) => {
    try {
        const { data } = await api.createWorkspace(workspace);
        dispatch({ type: CREATE_WORKSPACES, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getWorkspace = () => async (dispatch) => {
    try {
        const { data } = await api.getWorkspace();
        dispatch({ type: FETCH_WORKSPACES, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getWorkspaces = (id) => async (dispatch) => {
    try {
        const { data } = await api.getWorkspaces(id);
        dispatch({ type: FETCH_WORKSPACE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const editWorkspace = (id, workspace) => async (dispatch) => {
    try {
        console.log(id, workspace);
        const { data } = await api.editWorkspace(id, workspace);
        console.log(data);
        dispatch({ type: UPDATE_WORKSPACES, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteWorkspace = (id) => async (dispatch) => {
    try {
        await api.deleteWorkspace(id);
        dispatch({ type: DELETE_WORKSPACES, payload: id });
    } catch (error) {
        console.log(error);
    }
}