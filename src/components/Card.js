import React, { Fragment } from 'react';
import 'tachyons';

const Card = ({ id, name, email }) => {
    return (
        <Fragment>
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
                <img alt='robot' src={`https://robohash.org/${id}?100x100`}></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
            
        </Fragment>
        
    );
}

export default Card;