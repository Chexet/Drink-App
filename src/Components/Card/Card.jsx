import React from 'react';

import './Card.scss';

import { withRouter } from 'react-router-dom';

const Card = ({ name, imageUrl, history }) => {


    return (
        <div className="card" onClick={ () => history.push(`/drink/${name}`) }>
            <p>{ name }</p>
            <img src={ imageUrl } alt={ name } />
        </div>
    );
}

export default withRouter(Card);