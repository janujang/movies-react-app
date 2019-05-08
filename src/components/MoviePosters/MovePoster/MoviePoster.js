import React from 'react';
import classes from './MoviePoster.module.css'

const moviePoster = props => (
    <div className={classes.MoviePoster} onClick={props.clicked}>
        <img className={classes.img} src={'http://image.tmdb.org/t/p/w185/' + props.src} alt={props.title}/>
        {/*<h2>{props.title}</h2>*/}
    </div>
    
);

export default moviePoster;