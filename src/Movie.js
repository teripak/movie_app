import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
/*
class Movie extends Component {

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <div>{this.props.title}</div>
            </div>
        )
    }
}
class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster} alt="poster" />
        )
    }
}
*/
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <span className="Movie__Genre" key={index}>{genre} </span>)}
                </div>
                <div className="Movie__Synopsis">
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="poster" className="Movie__Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
export default Movie;


