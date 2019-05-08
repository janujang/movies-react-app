import React, {Component} from 'react';
import MoviePoster from './MovePoster/MoviePoster';
import classes from './MoviePosters.module.css';
import MoviePosterInfo from '../MoviePosterInfo/MoviePosterInfo';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';

class MoviePosters extends Component  {
    state = {
        movies: [],
        selectedId: null
    }

    componentDidMount(){
        //console.log(this.props);
        axios.get('http://api.themoviedb.org/3/movie/popular?api_key=0233eeb82ef3714df67f7e2db8e6ea28')
        .then(response => {
            this.setState({movies: response.data.results});
            //console.log(response)
        });
    }

    movieSelectedHandler = (id) => {
        //console.log(id);
        //this.setState({selectedId: id});
        this.props.history.push( '/movies/' + id )
    }

    render(){
        const movies = this.state.movies.map((movie) => 
            //<Link to={'/movies/' + movie.id} key={movie.id} >
                <MoviePoster 
                    key={movie.id}
                    title={movie.title} 
                    src={movie.poster_path} 
                    clicked={() => this.movieSelectedHandler(movie.id)}/>
            //</Link>
        );

        return(
            <div>
                <div className={classes.MoviePosters}>
                    {movies}
                </div>
                
            </div>
        );
    }
};

export default MoviePosters;