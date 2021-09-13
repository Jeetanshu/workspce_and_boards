import axios from 'axios';

const url = 'http://localhost:5000';

export const createWorkspace = (newWorkspace) => axios.post(`${url}/workspace`, newWorkspace);
export const getWorkspace = () => axios.post(`${url}/workspace/getworkspaces`);
export const editWorkspace = (id, updatedWorkspace) => axios.patch(`${url}/workspace/${id}`, updatedWorkspace);
export const deleteWorkspace = (id) => axios.delete(`${url}/workspace/${id}`);
export const createBoard = (newBoard) => axios.post(`${url}/board`, newBoard);
export const getBoard = (workspaceId) => axios.post(`${url}/board/getboards/${workspaceId}`);
export const editBoard = (id, updatedBoard) => axios.patch(`${url}/board/${id}`, updatedBoard);
export const deleteBoard = (id) => axios.delete(`${url}/board/${id}`);
export const getWorkspaces = (id) => axios.post(`${url}/workspace/getworkspace/${id}`);