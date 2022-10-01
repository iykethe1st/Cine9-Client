import React, { Component } from "react";
import { getGenres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const { onGenreSwitch, genres, textProperty, valueProperty, selectedGenre } =
    props;

  return (
    <ul className="list-group">
      <li className="list-group-item" onClick={() => onGenreSwitch()}>
        All Genres
      </li>

      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
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
