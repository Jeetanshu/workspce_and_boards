import React, { useState, useEffect } from 'react';
import { TextField , Button , Typography , Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createBoard } from '../../../actions/board.js';
import useStyle from './boardformstyle';

const BoardForm = ({ workspaceId }) => {

    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();

    const [board, setBoardData] = useState({
        title: '',
        description: '',
        workspaceId,
    });

    useEffect(() => {
        if (board) 
            setBoardData(board);
    }, [board]);

    const clear = () => {
        setBoardData({
            title: '',
            description: '',
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(board.title != "") {
            dispatch(createBoard(board));
            window.location.reload(false);
            clear();
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">Create a new Board</Typography>
                <TextField name="title" varient="outlined" label="Title" fullWidth value={board.title} onChange={(e) => setBoardData({ ...board, title: e.target.value })} required />
                <TextField name="message" varient="outlined" label="Description" fullWidth value={board.description} onChange={(e) => setBoardData({ ...board, description: e.target.value })} />
                <Button style={{ color: '#FFFFFF', backgroundColor: '#000000', }} className={classes.buttonSubmit} type="submit" fullWidth>Submit</Button>
                <Button style={{ color: '#FFFFFF', backgroundColor: '#1A1A1A', }} varient="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default BoardForm;