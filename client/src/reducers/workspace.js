import * as actionType from '../constants/actionTypes';

const workspaceReducer =  (workspace = [], action) => {
    switch (action.type) {
        case actionType.CREATE_WORKSPACES:
            return [ ...workspace, action.payload];
        case actionType.FETCH_WORKSPACES:
            return action.payload;
        case actionType.UPDATE_WORKSPACES:
            return workspace.map((workspaceFilter) => (workspaceFilter._id === action.payload._id ? action.payload : workspaceFilter));
        case actionType.DELETE_WORKSPACES:
            return workspace.filter((workspaceFilter) => workspaceFilter._id !== action.payload);
        default:
            return workspace;
    }
}

export default workspaceReducer;