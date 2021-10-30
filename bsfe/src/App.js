import React from 'react';
import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Entry } from './page/entry/EntryPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from './page/Dashboard/Dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/ticket.page';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { PrivateRoute } from './Component/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Entry/> 
          </Route>
          
            <PrivateRoute path="/dashboard"><Dashboard/></PrivateRoute>
            <PrivateRoute path="/add-ticket"><AddTicket/></PrivateRoute>
            <PrivateRoute path="/tickets"><TicketLists/> </PrivateRoute>
            <PrivateRoute path="/ticket/:tId"><Ticket/></PrivateRoute>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
