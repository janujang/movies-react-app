import React from 'react';
import classes from './Toolbar.module.css';
import {NavLink, Link} from 'react-router-dom';
//import { Dropdown } from 'react-bootstrap';


const toolbar = props => {
    const attachedClasses = [classes.Toolbar, classes.NoButton];
    let content = (
        <div>
        <div className={attachedClasses.join(' ')}>
            <strong>{props.title}</strong> 
            <nav>
                    <ul>
                        <li><NavLink to='/popular' exact activeStyle={{color: 'red'}}>Popular</NavLink></li>
                        <li><NavLink to='/top_rated' exact activeStyle={{color: 'red'}}>Top Rated</NavLink></li>
                        <li><NavLink to='/now_playing' exact activeStyle={{color: 'red'}}>Now Playing</NavLink></li>
                    </ul>
            </nav>
        </div>
        
        
        </div>
    );
    if (props.back){
        content = (
            <div className={classes.Toolbar}>
                <strong>{props.title}</strong>

                <nav>
                    <ul>
                        <li><Link to='/popular' exact>Back</Link></li>
                    </ul>
                </nav>
                
            </div>
        );
    }
    return content;
    
};

export default toolbar;

