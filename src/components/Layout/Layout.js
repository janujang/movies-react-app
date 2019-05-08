import React, {Component} from 'react';
import Posters from '../Posters/Posters';
import PosterInfo from '../PosterInfo/PosterInfo';
import {Route, Switch} from 'react-router-dom';
import Toolbar from '../Navigation/Toolbar/Toolbar';



class Layout extends Component {
    
    render(){
        return (
            <div>
                {/*<Toolbar/>*/}
                <Switch>
                    <Route path="/" exact component={Posters}/>
                    <Route path="/nowplaying" exact component={Posters}/>
                    <Route path="/toprated" exact component={Posters}/>
                    <Route path="/movies/:id" component={PosterInfo} />
                </Switch>
                
            </div>
        );
    }    
};

export default Layout;