// MyFavourite.jsx
import React from "react";
import { useSelector } from "react-redux";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./MyFavourite.css";
import { useEffect } from "react";

const MyFavourite = () => {
  const favoriteMovies = useSelector((state) => state.favorites.movies);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <span className="pageTitle">My Favourite Movies</span>
      <div className="favourites">
        {favoriteMovies && favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <SingleContent
              key={movie.id}
              id={movie.id}
              poster={movie.poster}
              title={movie.title}
              date={movie.date}
              media_type={movie.media_type}
              vote_average={movie.vote_average}
            />
          ))
        ) : (
          <p>No favourite movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyFavourite;
