// const Success = ({ user }) => {
//   return (
//     <div class="success">
//       <h2> Login Successful</h2>

//       <p><b>Name:</b> {user.name}</p>
//       <p><b>Roll Number:</b> {user.roll}</p>
//       <p><b>Email:</b> {user.email}</p>
//     </div>
//   );
// };

// export default Success;

import React, { useEffect, useState } from "react";
import { halls } from "./Hall";

const API_KEY = "17502cf6";

function Success({ setPage, setSelectedMovie, setSelectedCity, selectedCity }) {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [detailsMap, setDetailsMap] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
        const data = await res.json();

        if (data.Search) {
          setMovies(data.Search.slice(0, 12));

          // fetch details for each movie
          const details = await Promise.all(
            data.Search.slice(0, 12).map(async (m) => {
              const r = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${m.imdbID}&plot=short`);
              const d = await r.json();
              return [m.imdbID, d];
            })
          );

          const map = {};
          details.forEach(([id, d]) => { map[id] = d; });
          setDetailsMap(map);
        } else {
          setMovies([]);
          setDetailsMap({});
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (query && query.length >= 1) fetchMovies();
  }, [query]);

  const cities = Array.from(new Set(halls.map(h => h.city)));

  return (
    <div className="container">
      <div className="page-header">
        <div className="page-actions">
          <button onClick={() => setPage("login")}>Back</button>
        </div>

        <div>
          <div className="h2"><h2>Latest Movies</h2></div>
          <div className="movie-controls">
            <input className="search-input" placeholder="Search movie" value={query} onChange={e => setQuery(e.target.value)} />
            <select className="city-select" value={selectedCity || ''} onChange={e => setSelectedCity(e.target.value || null)}>
              <option value="">All Cities</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div style={{ width: 64 }} />
      </div>

      <div className="movie-grid">
        {movies.map((movie) => {
          const det = detailsMap[movie.imdbID] || {};
          return (
            <div
              className="movie-card"
              key={movie.imdbID}
              onClick={() => {
                setSelectedMovie(movie);
                setPage("hall");
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450"
                }
                alt={movie.Title}
              />

              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year} • {det.Language || 'N/A'}</p>
              <p>Rating: {det.imdbRating || 'N/A'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Success;
