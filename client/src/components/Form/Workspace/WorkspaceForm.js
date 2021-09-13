import React, { useState , useEffect } from 'react';
import { TextField , Button , Typography , Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createWorkspace } from '../../../actions/workspace.js';
import useStyle from './workspacestyle.js';

const WorkspaceForm = ({ currentId, setCurrentId }) => {

    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();

    const [workspace, setWorkspaceData] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        if (workspace) 
            setWorkspaceData(workspace);
    }, [workspace]);

    const clear = () => {
        setWorkspaceData({
            title: '',
            description: '',
        });
    }

    const handleSubmit = (e) => {
        if(workspace.title != '') {
            dispatch(createWorkspace(workspace));
            history.push("/");
            clear();    
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a new Workspace</Typography>
                <TextField name="title" varient="outlined" label="Title" fullWidth required value={workspace.title} onChange={(e) => setWorkspaceData({ ...workspace, title: e.target.value })} />
                <TextField name="description" varient="outlined" label="Description" fullWidth value={workspace.description} onChange={(e) => setWorkspaceData({ ...workspace, description: e.target.value })} />
                <Button style={{ color: '#FFFFFF', backgroundColor: '#000000', }} className={classes.buttonSubmit} type="submit" fullWidth>Submit</Button>
                <Button style={{ color: '#FFFFFF', backgroundColor: '#1A1A1A', }} varient="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default WorkspaceForm;