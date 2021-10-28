import React from 'react';
import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Entry } from './page/entry/EntryPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from './page/Dashboard/Dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard/>   */}
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
