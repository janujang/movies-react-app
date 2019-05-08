import React, {Component} from 'react';
import MoviePoster from '../MoviePosters/MovePoster/MoviePoster';
import MoviePosters from '../MoviePosters/MoviePosters';
import classes from './Layout.module.css';
import MoviePosterInfo from '../MoviePosterInfo/MoviePosterInfo';
import {Route, Link, NavLink, Switch} from 'react-router-dom';



class Layout extends Component {
    
    render(){
        return (
            <div>
                <div className={classes.Toolbar}>
                    <strong>Latest Movies</strong>
                    <nav>
                        <ul>
                            <li><Link to='/movies'>Movies</Link></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/movies" exact component={MoviePosters}/>
                    <Route path="/movies/:id" component={MoviePosterInfo} />
                </Switch>
                
            </div>
        );
    }    
};

export default Layout;