import React from 'react';
import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Entry } from './page/entry/EntryPage';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        ok anh
        </DefaultLayout>
    </div>
  );
}

export default App;
