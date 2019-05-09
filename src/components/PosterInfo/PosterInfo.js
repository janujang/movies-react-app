import React, {Component} from 'react';
import classes from './PosterInfo.module.css'
import axios from 'axios';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import {VideoPlayer} from "@we.org/shared-component-library";


class PosterInfo extends Component {
    state = {
        loadedMovie: null
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        if (this.props.match.params.id){
            //new post
            if (!this.state.loadedMovie || (this.state.loadedMovie && this.state.loadedMovie.id !== this.props.match.params.id)) {
                axios.get('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=0233eeb82ef3714df67f7e2db8e6ea28')
                .then(response => {
                    console.log(response.data)
                    this.setState({loadedMovie: response.data});
                }).catch(error => {

                });

                //go through promises and async

            //     axios.get('1').then(get('2')).then(get('3')).catch(console.log(err))

            //     axios.get('1', function() => { 
            //         axios.get('2', function() {
            //             axios.get('3', function() {}, function(){fdsfdsfdsf}
            //         }, function(fdsfdsfds))
            //     }, function() => {fdsfdsf})

            //     async function() {
            //     try {
            //         await axios.get(1)
            //         await axios.get(2)
            //         await axios.get(3)
            //     } catch(error)
            }
           
        }
    }
    render() {
        let content = null;
        // const [element1, element2] = [1,2]
        // const {element1, element2} = {element1: 1, element2: 2}
        // const foo = {element1: 1, element2: 2}
        // const {element1, element2} = foo

        if (this.props.match.params.id){
            content = null;
        }
        //check due to asynchronous nature
        const { loadedMovie } = this.state
        if (loadedMovie) {
            content = (
                <div className={classes.PosterInfo}>
                    <h1>{this.state.loadedMovie.title}</h1>   

                    <div className={classes.Columns}>
                        <img 
                            className={classes.img} 
                            src={'http://image.tmdb.org/t/p/w342/' + this.state.loadedMovie.poster_path} 
                            alt={this.state.loadedMovie.title}/>
                        <div className={classes.TextContainer}>
                            <h2>{this.state.loadedMovie.release_date}</h2> 
                            <h3>{this.state.loadedMovie.runtime} mins</h3> 
                            <h3>{this.state.loadedMovie.vote_average + '/10'}</h3>


                            <div className={classes.rating_bar}>
                                <div  className={classes.rating} style={{width:'40%'}}/>
                            </div>


                            <p>{this.state.loadedMovie.overview}</p> 

                            <button>MARK AS FAVOURITE</button>
                            <button>REVIEW</button>
                            <button>SHARE</button>
                        </div>
                    </div>
                    
                    <div className={classes.Trailer}>
                        <hr/>
                        <h2>Trailers:</h2> 
                        <ul>
                            <li>Trailer 1</li>
                            <VideoPlayer title="Logic" videoId="123123" />
                            <li>Trailer 2</li>
                        </ul>
                        <hr/>
                    </div>
                    

                    
                </div>
   
            );
        }
        return (
            <div>
                <Toolbar title="Movie Detail" back={true} />
                {content}
            </div>
        );
        //return <h1>Hi</h1>;
    }
};

export default PosterInfo;

