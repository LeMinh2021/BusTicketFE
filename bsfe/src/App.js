import React from 'react';
import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Entry } from './page/entry/EntryPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from './page/Dasboard/Dashboard.page';


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        <Dashboard/>  
      </DefaultLayout>
    </div>
  );
}

export default App;
