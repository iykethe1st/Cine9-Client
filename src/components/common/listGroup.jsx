import React, { Component } from "react";
import { getGenres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const {
    onGenreSwitch,
    onResetGenre,
    genres,
    textProperty,
    valueProperty,
    selectedGenre,
  } = props;

  return (
    <ul className="list-group">
      <li className="clickable list-group-item" onClick={() => onResetGenre()}>
        All Genres
      </li>

      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
          onClick={() => onGenreSwitch(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
