import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import image from "../../../public/image.jpg";
 
const Details = ({ handleClose, show, movie }) => {
  const [genres, setGenres] = useState([]);
  const [resume, setResume] = useState([]);
  useEffect(() => {
    if (movie && movie.genre) {
      let movieGenres = movie.genre.split(",").map((genre) => genre.trim());
      movieGenres.filter((genre) => genre === "");
      setGenres(movieGenres);
    }
  }, [movie]);
 
  const handleLouer = () => {
    // to do
    console.log("played");
  };
 
  const handleFavorite = () => {
    //todo
    addFavorite();
  };
 
  console.log("Détails du film :");
 
  return (
    <Modal className="modal-detail" isOpen={show} closed={handleClose}>
      <h1 onClick={handleClose}>X</h1>
      <div
        className="detail"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(63, 56, 56, 0.6), rgb(33, 31, 31) 90%), url(${movie.poster})`,
        }}
      >
        <div className="container-img-detail">
          <div
            className="img-detail"
            style={{
              backgroundImage: `url(${movie.poster})`,
            }}
          ></div>
        </div>
        <div className="container-details">
          <h2>{movie.titre}</h2>
          <ul>
            {genres.map((genre, index) => (
              <li key={index} id="liste">
                {genre}
              </li>
            ))}
          </ul>
          <p>{movie.resume}</p>
          <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
          <div class="modal-BTN">
            <button class="play-BTN" onClick={handleLouer}>
              Louer
            </button>
            <button class="add-favorite-BTN" /*onClick={handleFavorite}*/>
              Favorie
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
 
export default Details;