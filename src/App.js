import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './HomePage/pages/HomePage';
import CalendarPage from './Calendar/pages/CalendarPage';
import NotesPage from './Notes/pages/NotesPage';
import ToDoPage from './ToDo/pages/ToDoPage';
import Header from './shared/components/Header/pages/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
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
      </main>
    </Router>
  );
}

export default App;
