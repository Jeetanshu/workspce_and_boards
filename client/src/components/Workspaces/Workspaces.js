import React, {useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import WorkspaceCards from '../Card/Workspace/WorkspaceCards.js';
import WorkspaceForm from '../Form/Workspace/WorkspaceForm.js';
import useStyle from './style';
import { getWorkspace } from '../../actions/workspace.js';
import NavBar from '../NavBar/NavBar.js';

function Workspaces(props) {
  const classes = useStyle();

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkspace());
  }, [currentId, dispatch]);

  return (
    <>
      <NavBar />
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3} >
            <Grid item xs={12} sm={4}>
              <WorkspaceForm/>
            </Grid>
            <Grid item xs={12} sm={7}>
                <WorkspaceCards setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
}

export default Workspaces;