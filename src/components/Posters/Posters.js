import React, { Component } from "react";
import Poster from "./Poster/Poster";
import classes from "./Posters.module.css";
import axios from "axios";
import Toolbar from "../Navigation/Toolbar/Toolbar";
//import {Atoms, Organisms, Molecules} from "@we.org/shared-component-library";

class Posters extends Component {
  state = {
    movies: [],
    selectedId: null,
    category: ""
  };

  componentDidMount() {
    axios
      .get(
        "http://api.themoviedb.org/3/movie/" +
          "popular" +
          "?api_key=17ff30cdfe7a2e0e372635283aefece3"
      )
      .then(response => {
        this.setState({ movies: response.data.results, category: "popular" });
        //console.log(response)
      });
  }

  componentDidUpdate() {
    console.log(this.props.match.params);
    //console.log(this.props);
    //axios.get('http://api.themoviedb.org/3/movie/popular?api_key=0233eeb82ef3714df67f7e2db8e6ea28')

    // if (this.props.match.params.category){
    //new movie
    if (
      !this.state.category ||
      this.state.category !== this.props.match.params.category
    ) {
      axios
        .get(
          "http://api.themoviedb.org/3/movie/" +
            this.props.match.params.category +
            "?api_key=17ff30cdfe7a2e0e372635283aefece3"
        )
        .then(response => {
          this.setState({
            movies: response.data.results,
            category: this.props.match.params.category
          });
          //console.log(response)
        });
    }
  }

  movieSelectedHandler = id => {
    //console.log(id);
    //this.setState({selectedId: id});
    this.props.history.push("/movies/" + id);
  };

  render() {
    const movies = this.state.movies.map(
      movie => (
        //<Link to={'/movies/' + movie.id} key={movie.id} >
        <Poster
          key={movie.id}
          title={movie.title}
          src={movie.poster_path}
          clicked={() => this.movieSelectedHandler(movie.id)}
        />
      )
      //</Link>
    );

    return (
      <div>
        <Toolbar title={this.state.category.toUpperCase()} back={false} />
        <div className={classes.Posters}>{movies}</div>
      </div>
    );
  }
}

export default Posters;
