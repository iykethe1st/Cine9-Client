import React, { Component } from "react";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Joi, { log } from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class NewMovie extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .integer()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId == "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie.id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  //   handleOptionChange = (e) => {
  //     const data = { ...this.state.data };
  //     data[e.target.name] = { _id: "", name: e.target.value };
  //     this.setState({ data });
  //     console.log(data);
  //     console.log("Option change handled");
  //   };

  //   renderOptions() {
  //     const genres = [
  //       "Action",
  //       "Comedy",
  //       "Thriller",
  //       "Adventure",
  //       "Horror",
  //       "Science Fiction",
  //       "Kids",
  //     ];
  //     // console.log(genres);
  //     return (
  //       <div className="form-group ">
  //         <label htmlFor="genre">Genre</label>

  //         <select
  //           onChange={this.handleOptionChange}
  //           className="custom-select"
  //           name="genre"
  //           id="genre"
  //         >
  //           <option defaultValue="">Select Genre...</option>
  //           {genres.map((genre) => {
  //             return (
  //               <option key={genre} value={genre}>
  //                 {genre}
  //               </option>
  //             );
  //           })}
  //         </select>
  //       </div>
  //     );
  //   }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <form onClick={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
