import React from 'react';
import UserSearch from './componant/UserSearch'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Welcome to React</h1>
      <UserSearch limitation = {10} username = {'pond'}/>
    </div>
  );
}

export default App;
