import React from 'react';
import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Entry } from './page/entry/EntryPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from './page/Dashboard/Dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLists } from './page/ticket-list/TicketLists.page';


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard/>   */}
        {/* <AddTicket/> */}
        <TicketLists/>
      </DefaultLayout>
    </div>
  );
}

export default App;
