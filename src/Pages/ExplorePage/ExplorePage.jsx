import React, { useState } from 'react';

import './ExplorePage.scss';

import Drinks from '../../Assets/drinks.json';
import Card from '../../Components/Card/Card';

const ExplorePage = () => {
    const [searchText, setSearchText] = useState("");
    const [drinks, setDrinks] = useState([]);

    const handleClick = () => {
        const validDrinks = Drinks.cocktails.filter(x => x.name.toLowerCase().includes(searchText.toLowerCase()));
        setDrinks(validDrinks.map(x => <Card name={x.name} imageUrl={x.image} key={x.name}/>))
    };

    const handleChange = e => {
        setSearchText(e.target.value);
    };

    return (
        <div className="explorepage">
            <h1>Find your favourite drink!</h1>

                <input type="text" name="search" onChange={ handleChange } />
                <button onClick={ handleClick }>Search</button>

                <div className="drinks-section">
                    { drinks }
                </div>

        </div>
    );
}

export default ExplorePage;