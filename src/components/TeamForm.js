import React, {useState} from 'react';

const TeamForms = props => {
    const [teamMember, setTeamMember] = useState({name: '', role: '', startDate: ''});

    return (
        <form>
            <label htmlFor='Name'></label>
            <input 
            id='name'
            type='text'
            name='name'
            ></input>

        </form>
    )
}

export default TeamForms;