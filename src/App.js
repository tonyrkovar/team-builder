import React, {useState} from 'react';
import './App.css';
import TeamCards from './components/TeamDisplay';
import TeamForms from './components/TeamForm';

function App() {
  const [member, setMemeber] = useState([
    {
    id: 1,
    name: 'Jeremy',
    role: 'Accountant',
    startDate: 'last week'
  }
])

const addNewMember = adding => {
  const newMember = {
    id: Date.now(),
    name: adding.name,
    role: adding.role,
    startDate: adding.startDate
  }
  setMemeber([...member, newMember])
}
  return (
    <div className="App">
      <TeamForms addNewMember={addNewMember}/>
      <TeamCards member={member}/>
    </div>
  );
}

export default App;
