import React from 'react';
import './movies.css';

const Movies = (props) => {
    console.log("inside news ",props)

    const renderList = props.moviesdata.map((data) => {
        return(
            <div>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
                <p>{data.rating}</p>

            </div>
        )
    })

    return(
        <div>
            {renderList}
        </div>
    )
}

export default Movies;
