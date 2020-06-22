import React from 'react';

import './Card.scss';

const Card = ({ name, imageUrl }) => {


    return (
        <div className="card">
            <p>{ name }</p>
            <img src={ imageUrl } />
        </div>
    );
}

export default Card;