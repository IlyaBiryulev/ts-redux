import React from 'react';
import './App.scss'
import Users from '../Users/Users';
import Posts from '../Posts/Posts';

function App() {
  return (
    <div className="app">
      <Users />
      <Posts />
    </div>
  );
}

export default App;
