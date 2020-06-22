import React from 'react';

import './DrinkPage.scss';

import Drinks from '../../Assets/drinks.json';

const DrinkPage = props => {
    const { name, image, preparation } = Drinks.cocktails.find(x => x.name === props.match.params.drink);

    return (
        <div className="drinkpage">
            <h1>{ name }</h1>
            <p>{ preparation }</p>
            <img src={ image } />
        </div>
    )
};

export default DrinkPage;