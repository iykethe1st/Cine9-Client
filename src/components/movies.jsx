import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeBtn from "./common/likeBtn";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import { get } from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    movies[index].liked ? movies[index].likes++ : movies[index].likes--;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSwitch = (genre) => {
    this.state.movies = getMovies();
    const movies = this.state.movies.filter(
      (movie) => movie.genre.name === genre.name
    );
    this.setState({ movies });
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;

    const movies = paginate(this.state.movies, currentPage, pageSize); //returns a new array of movies

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={this.state.genres}
            onGenreSwitch={this.handleGenreSwitch}
            movies={this.state.movies}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeBtn
                      liked={movie.liked}
                      likes={movie.likes}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
