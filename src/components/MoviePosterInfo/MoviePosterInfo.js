import React, {Component} from 'react';
import classes from './MoviePosterInfo.module.css'
import axios from 'axios';
import ReactDOM from 'react-dom';

class MoviePosterInfo extends Component {
    state = {
        loadedMovie: null
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        if (this.props.match.params.id){
            //new post
            if (!this.state.loadedMovie || (this.state.loadedMovie && this.state.loadedMovie.id != this.props.match.params.id)) {
                axios.get('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=0233eeb82ef3714df67f7e2db8e6ea28')
                .then(response => {
                    console.log(response.data)
                    this.setState({loadedMovie: response.data});
                });
            }
           
        }
    }
    render(){
        let content = null;
        
        if (this.props.match.params.id){
            content = null;
        }
        //check due to asynchronous nature
        if (this.state.loadedMovie)
        {
            content = (
                <div className={classes.MoviePosterInfo}>
                    <img 
                        className={classes.img} 
                        src={'http://image.tmdb.org/t/p/w185/' + this.state.loadedMovie.poster_path} 
                        alt={this.state.loadedMovie.title}/>
                    <div className={classes.TextContainer}>
                        <h1>{this.state.loadedMovie.title}</h1>   
                        <p><strong>Release Date:</strong> {this.state.loadedMovie.release_date}</p> 
                        <p><strong>Plot Synopsis:</strong> <br/>{this.state.loadedMovie.overview}</p> 
                        <p><strong>Rating: </strong>{this.state.loadedMovie.vote_average + '/10'}</p> 
                    </div>
                </div>
                
            );
        }
        return content;
        //return <h1>Hi</h1>;
    }
};

export default MoviePosterInfo;

