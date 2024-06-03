// SingleContent.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import { addMovie, removeMovie } from "../../favouriteSlice";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);
  const isFavorite = favorites.some((movie) => movie.id === id);

  const handleAddToFavorites = () => {
    dispatch(addMovie({ id, poster, title, date, media_type, vote_average }));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeMovie({ id }));
  };

  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites} className="favBtn clicked">
          Remove from Favorites
        </button>
      ) : (
        <button onClick={handleAddToFavorites} className="favBtn">
          Add to Favorites
        </button>
      )}
    </ContentModal>
  );
};

export default SingleContent;
