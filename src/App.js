import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects'

import ProjectState from './context/projects/ProjectState'
import TaskState from './context/tasks/TaskState'

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/sign-up" component={NewAccount}></Route>
            <Route exact path="/" component={Projects}></Route>
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;
