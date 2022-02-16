import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './pages/Reports';
import {Messages, MessagesOne, MessagesTwo} from './pages/Messages';

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/messages/message1" exact component={MessagesOne} />
        <Route path="/messages/message2" exact component={MessagesTwo} />
      </Switch>
    </Router>
  );
}

export default App;
