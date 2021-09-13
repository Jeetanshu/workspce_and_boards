import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Workspaces from './components/Workspaces/Workspaces.js';
import Boards from './components/Boards/Boards.js';

function App() {

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Switch>
          <Route path="/" exact component={Workspaces}></Route>
          <Route path="/boards/:id" exact component={Boards}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;