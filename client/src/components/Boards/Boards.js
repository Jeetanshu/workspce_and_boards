import React, {useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

import BoardCards from '../Card/Board/BoardCards.js';
import BoardForm from '../Form/Board/BoardForm.js';
import useStyle from './style.js';
import { getBoard } from '../../actions/board.js';
import { getWorkspaces } from '../../actions/workspace.js';

const Boards = (props) => {

    const classes = useStyle();
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getWorkspaces(id));
        dispatch(getBoard(id));
      }, [dispatch]
    );

    const workspace = useSelector((state) => state.workspaceName);

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography className={classes.heading} variant="h2" align="center">{workspace}</Typography>
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        className={classes.mainContainer}
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <BoardCards workspaceId = {id} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <BoardForm workspaceId = {id} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </>
    );
};

export default Boards;