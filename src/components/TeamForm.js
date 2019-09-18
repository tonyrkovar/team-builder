import React, {useState} from 'react';

const TeamForms = props => {
    const [teamMember, setTeamMember] = useState({name: '', role: '', startDate: ''});

    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input 
            id='name'
            type='text'
            name='name'
            ></input>
            <label htmlFor='role'>Role</label>
            <input
            id='role'
            type='text'
            name='employeeRole'
            ></input>
            <label htmlFor='startDate'>Start Date:</label>
            <input 
            id='startDate'
            type='date'
            name='startDate'
            ></input>

        </form>
    )
}

export default TeamForms;