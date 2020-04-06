import React from 'react';


function Quotecard({character}) {
    return (
        <figure className="QuoteCard">
        <img src={character.image} alt={character.character}/>
        <figcaption>
        <blockquote>
            
            {character.quote}
        </blockquote>
        <p>
        <cite> {character.character} </cite>
        </p>
        </figcaption>
        </figure>
    )
};

export default Quotecard;