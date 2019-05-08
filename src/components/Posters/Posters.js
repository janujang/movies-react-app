import React, {Component} from 'react';
import Poster from './Poster/Poster';
import classes from './Posters.module.css';
import axios from 'axios';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Posters extends Component  {
    state = {
        movies: [],
        selectedId: null
    }

    componentDidMount(){
        console.log(this.props.match.params);
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
                <Poster 
                    key={movie.id}
                    title={movie.title} 
                    src={movie.poster_path} 
                    clicked={() => this.movieSelectedHandler(movie.id)}/>
            //</Link>
        );

        return(
            <div>
                <Toolbar title='Popular Movies' back={false}/>
                <div className={classes.Posters}>
                    {movies}
                </div>
                
            </div>
        );
    }
};

export default Posters;