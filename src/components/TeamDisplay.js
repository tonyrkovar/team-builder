import React from 'react';

const TeamCards = props => {
    console.log('TeamCards:', props)
    return (
        <div className='team_cards'>
            {props.member.map(card => (
                <div className='memberCard' key={card.id}>
                    <h2>Name: {card.name}</h2>
                    <p>Role: {card.role}</p>
                    <p>Start Date: {card.startDate}</p>
                </div>
            ))}
                
        </div>
    )
}

export default TeamCards;