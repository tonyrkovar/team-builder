import React, {useState} from 'react';

const TeamForms = props => {
    const [teamMember, setTeamMember] = useState({name: '', role: '', startDate: ''});
    console.log(props)

    const submitButton = e => {
        e.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({name: '', role: '', startDate: ''})
    }

    const addMember = e => {
        console.log(teamMember);
        setTeamMember({...teamMember, [e.target.name]: e.target.value})
    }

    console.log(teamMember)

    return (
    <div className='team_form'>
        <form onSubmit={submitButton}>
            <label htmlFor='name'>Name:</label>
                <input 
                id='name'
                type='text'
                name='name'
                onChange={addMember}
                value={teamMember.name}
                ></input>
            <label htmlFor='role'>Role</label>
                <input
                id='role'
                type='text'
                name='role'
                onChange={addMember}
                value={teamMember.role}
                ></input>
            <label htmlFor='startDate'>Start Date:</label>
                <input 
                id='startDate'
                type='date'
                name='startDate'
                onChange={addMember}
                value={teamMember.startDate}
                ></input>
            <button type='submit'>Add Team Member</button>
        </form>
    </div>
    )
}

export default TeamForms;