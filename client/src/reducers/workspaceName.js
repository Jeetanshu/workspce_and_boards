import * as actionType from '../constants/actionTypes';

const workspaceNameReducer =  (workspaceName = [], action) => {
    switch (action.type) {
        case actionType.FETCH_WORKSPACE:
            return action.payload;
        default:
            return workspaceName;
    }
}

export default workspaceNameReducer;