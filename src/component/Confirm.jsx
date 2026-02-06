import React from "react";

function Confirm({ booking, selectedMovie, selectedHall, user, setPage }) {
  // booking may contain movie/hall; prefer booking values
  const movie = booking?.movie || selectedMovie;
  const hall = booking?.hall || selectedHall;

  if (!booking || !movie || !hall) {
    return (
      <div className="page-container">
        <p>No booking found.</p>
        <div className="page-actions">
          <button onClick={() => setPage("booking")}>Back</button>
          <button onClick={() => setPage("success")}>Movies</button>
        </div>
      </div>
    );
  }

  return (
    <div className="confirm-container">
      <h2><span className="confirm-success">Ticket Confirmed 🎉</span></h2>

      <div className="confirm-body">
        <div>
          <img
            className="confirm-poster"
            src={movie?.Poster !== "N/A" ? movie?.Poster : "https://via.placeholder.com/200x300"}
            alt={movie?.Title}
          />
        </div>

        <div className="confirm-info">
          <h3>{movie?.Title}</h3>
          <p>Hall: {hall?.name} ({hall?.city})</p>
          <p>Date: {booking?.date}</p>
          <p>Time: {booking?.time}</p>
          {booking?.user?.name && <p>Booked For: {booking.user.name}</p>}

          <div className="confirm-cta">
            <button onClick={() => setPage("success")}>Back to Movies</button>
            <button onClick={() => setPage("hall")}>Book Another Hall</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
