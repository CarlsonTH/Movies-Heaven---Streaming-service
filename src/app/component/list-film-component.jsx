import React, { useState, useEffect } from "react";
import axios from "axios";
import "../globals.css";

const ListFilm = ({ showDetails }) => {
  const [jsonData, setJsonData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8888/ProjetBack_end/ServletUserInfo/listeFilm",
      timeout: 4000,
    })
      .then((response) => {
        const movies = response.data;
        setJsonData(movies);

        const allGenres = movies.reduce((acc, movie) => {
          if (movie.genre) {
            const movieGenres = movie.genre
              .split(",")
              .map((genre) => genre.trim());
            acc = acc.concat(movieGenres);
          }
          return acc;
        }, []);

        const nonEmptyGenres = allGenres.filter((genre) => genre !== "");
        const uniqueGenres = [...new Set(nonEmptyGenres)];
        setGenres(uniqueGenres);

        const allYears = movies.map((movie) => movie.annee);
        const nonEmptyYears = allYears.filter((year) => year !== "");
        const uniqueYears = [...new Set(nonEmptyYears)].sort((a, b) => b - a);
        setYears(uniqueYears);

        const allLanguages = movies.map((movie) => movie.langue);
        const nonEmptyLanguages = allLanguages.filter(
          (language) => language !== ""
        );
        const uniqueLanguages = [...new Set(nonEmptyLanguages)];
        setLanguages(uniqueLanguages);
        setSortedMovies(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error appropriately, set default values, etc.
      });
  }, []);

  useEffect(() => {
    handleSortClick();
  }, [jsonData]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleAlphabetChange = (event) => {
    setSelectedAlphabet(event.target.value);
  };

  const handleSortClick = () => {
    let filteredMovies = jsonData;

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.genre &&
          movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (selectedYear) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.annee && movie.annee.toString() === selectedYear
      );
    }

    if (selectedLanguage) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.langue &&
          movie.langue.toLowerCase() === selectedLanguage.toLowerCase()
      );
    }

    if (selectedAlphabet) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.titre &&
          movie.titre.toLowerCase().startsWith(selectedAlphabet.toLowerCase())
      );
    }

    setSortedMovies(filteredMovies.length > 0 ? filteredMovies : []);
  };

  const resetFilters = () => {
    setSelectedGenre("");
    setSelectedYear("");
    setSelectedLanguage("");
    setSelectedAlphabet("");
    setSortedMovies(jsonData);
  };

  const renderMovies = () => {
    if (sortedMovies.length === 0) {
      return <p>Aucun film trouvé.</p>;
    }

    return (
      <ul className="listefilms">
        {sortedMovies.map((movie) => (
          <li key={movie.id} onClick={() => showDetails(movie)}>
            <div>
              <img src={movie.poster} alt="img" />
            </div>
            <div>{movie.titre}</div> <div>{movie.annee}</div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="listefilmdiv">
      <select
        id="genreSelect"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="">GENRE</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
        <option value="">DATE SORTIE</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="">LANGUE</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <select
        id="alphabetSelect"
        value={selectedAlphabet}
        onChange={handleAlphabetChange}
      >
        <option value="">ABC</option>
        {alphabet.split("").map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>

      <button className="bouttonfiltre" onClick={handleSortClick}>
        Trier
      </button>
      <button className="bouttonfiltre" onClick={resetFilters}>
        Réinitialiser
      </button>

      {renderMovies()}
    </div>
  );
};

export default ListFilm;
