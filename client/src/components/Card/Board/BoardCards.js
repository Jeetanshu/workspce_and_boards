import React from 'react';
import { Grid , CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import BoardCard from './BoardCard.js';
import useStyle from './style';

const BoardCards = ({ workspaceId }) => {
    const classes = useStyle();
    const boards = useSelector((state) => state.board);

    return (
        !boards.length ? 
        (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                <Typography className={classes.heading} variant="h3" align="center">No Boards Available</Typography>
            </Grid>
        ) :
        (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {boards.map((board) => (
                    board._id != undefined ?
                        (
                            <Grid key={board._id} item xs={12} sm={6} md={6}>
                                <BoardCard board={board} />
                            </Grid>
                        ) : null
                ))}
            </Grid>
        )
    );
}

export default BoardCards;