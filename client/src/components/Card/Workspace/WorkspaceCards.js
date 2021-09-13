import React from 'react';
import { Grid , CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import WorkspaceCard from './WorkspaceCard.js';
import useStyle from './style';

const WorkspaceCards = ({ setCurrentId }) => {
    const classes = useStyle();
    const workspaces = useSelector((state) => state.workspace);

    return (
        !workspaces.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {workspaces.map((workspace) => (
                    <Grid key={workspace._id} item xs={12} sm={6} md={6}>
                        <WorkspaceCard workspace={workspace} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default WorkspaceCards;