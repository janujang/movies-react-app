import React from "react";
import classes from "./Poster.module.css";

const poster = props => (
  <div className={classes.Poster} onClick={props.clicked}>
    <img
      src={"http://image.tmdb.org/t/p/w185/" + props.src}
      alt={props.title}
    />
    {/*<h2>{props.title}</h2>*/}
  </div>
);

export default poster;
