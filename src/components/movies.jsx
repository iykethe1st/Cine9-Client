import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
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

  handleResetGenre = () => {
    const movies = (this.state.movies = getMovies());
    this.setState({ movies });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const { pageSize, currentPage, movies, selectedGenre, sortColumn } =
      this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;

    const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);

    const paginatedMovies = paginate(sorted, currentPage, pageSize); //returns a new array of movies

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={this.state.genres}
            onGenreSwitch={this.handleGenreSwitch}
            movies={movies}
            selectedGenre={selectedGenre}
            onResetGenre={this.handleResetGenre}
          />
        </div>

        <div className="col">
          <p>Showing {count} movies in the database.</p>

          <MoviesTable
            movies={paginatedMovies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />

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
