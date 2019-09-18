import React from 'react';

const TeamCards = props => {
    console.log('TeamCards:', props)
    return (
        <div className='team_cards'>
            {props.member.map(card => (
                <div className='memberCard' key={card.id}>
                    <h2>{card.name}</h2>
                    <p>{card.role}</p>
                    <p>{card.startDate}</p>
                </div>
            ))}
                
        </div>
    )
}

export default TeamCards;