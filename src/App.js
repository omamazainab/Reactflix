import React from 'react';
import './App.css';

import Nav from './components/Nav'
import Upload from './components/Upload'

import { useAuth0 } from "@auth0/auth0-react";



function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>loading</p> ;
  }

  return (
    <div className="App">
      <Nav></Nav>
      <Upload/>
    </div>
  );
}

export default App;
