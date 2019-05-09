import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
//import "~@we.org/shared-component-library/styles/base.scss";

function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
