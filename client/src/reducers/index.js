import { combineReducers } from "redux";
import workspace from "./workspace";
import board from "./board";
import workspaceName from "./workspaceName";

export default combineReducers({ workspace, board, workspaceName });