import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './HomePage/pages/HomePage';
import CalendarPage from './Calendar/pages/CalendarPage';
import NotesPage from './Notes/pages/NotesPage';
import ToDoPage from './ToDo/pages/ToDoPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/calendar" exact>
          <CalendarPage />
        </Route>
        <Route path="/notes" exact>
          <NotesPage />
        </Route>
        <Route path="/todo" exact>
          <ToDoPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
