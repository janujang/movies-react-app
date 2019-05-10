import React, {Component} from 'react';
import Poster from './Poster/Poster';
import classes from './Posters.module.css';
import axios from 'axios';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import {Atoms, Organisms, Molecules} from "@we.org/shared-component-library";

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

        // const Link = () => null;
        // const columns = (
        // <Molecules.NavigationColumn key="Column 1" title="Column 1">
        //     <Atoms.BaseLink external href="https://google.ca">Link 1</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 2</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 3</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 4</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 5</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 6</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 7</Atoms.BaseLink>
        // </Molecules.NavigationColumn>,
        // <Molecules.NavigationColumn key="Column 2" title="Column 2">
        //     <Atoms.BaseLink external href="https://google.ca">Link 1</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 2</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 3</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 4</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 5</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 6</Atoms.BaseLink>
        //     <Atoms.BaseLink external href="https://google.ca">Link 7</Atoms.BaseLink>
        // </Molecules.NavigationColumn>
        //);
        return(
            <div>
                <Toolbar title='Popular Movies' back={false}/>
                
                {/* <Organisms.NavigationBar
                    internalLinkComponent={Link}
                    sectionsArray={[
                    {
                        title: "About WE",
                        subMenuTitle: "Example Title",
                        subMenuBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        buttonText: "Button",
                        buttonHref: "/",
                    },
                    {
                        title: "Our Work",
                        subMenuTitle: "Example Title",
                        subMenuBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        buttonHidden: true,
                    
                    },
                    {
                        title: "Get Involved with WE",
                        subMenuTitle: "Example Title",
                        subMenuBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        buttonText: "Button",
                        buttonHref: "https://google.ca",
                        buttonIsExternal: true,
                       
                    }
                    ]}
                    />*/}
                <div className={classes.Posters}>
                    {movies}
                </div> 
                
            </div>
        );
    }
};

export default Posters;