import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    const CardArray = robots.map((robot, i) => {
        return <Card
            key={robot.id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />;
    });
    return(
        <div className='tc'>
            {CardArray}
        </div>
    );
}

export default CardList;