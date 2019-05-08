import React from 'react';
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


const toolbar = props => {
    const attachedClasses = [classes.Toolbar, classes.NoButton];
    let content = (
        <div>
        <div className={attachedClasses.join(' ')}>
            <strong>{props.title}</strong> 
            <nav>
                    <ul>
                        <li><Link to='/' exact>Popular</Link></li>
                        <li><Link to='/toprated' exact>Top Rated</Link></li>
                        <li><Link to='/nowplaying' exact>Now Playing</Link></li>
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
                        <li><Link to='/' exact>Back</Link></li>
                    </ul>
                </nav>
                
            </div>
        );
    }
    return content;
    
};

export default toolbar;

