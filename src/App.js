import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamCards from './components/TeamDisplay';
import TeamForms from './components/TeamForm';

function App() {
  return (
    <div className="App">
      <TeamForms />
      {/* <TeamCards /> */}
    </div>
  );
}

export default App;
