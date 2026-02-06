import React, { useState } from "react";

function Booking({ user, selectedMovie, selectedHall, setBooking, setPage }) {
  const today = new Date();
  const iso = today.toISOString().slice(0, 10);
  const [date, setDate] = useState(iso);
  const [time, setTime] = useState("");

  if (!selectedMovie || !selectedHall) {
    return (
      <div className="page-container">
        <p>Missing selection. Please pick a movie and a hall.</p>
        <div className="page-actions">
          <button onClick={() => setPage("success")}>Back</button>
          <button onClick={() => setPage("hall")}>Choose Hall</button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="page-container">
        <p>Please login to continue booking.</p>
        <div className="page-actions">
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
        </div>
      </div>
    );
  }

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    const bookingObj = {
      user: user || null,
      movie: selectedMovie,
      hall: selectedHall,
      city: selectedHall?.city || null,
      date,
      time,
      bookedAt: new Date().toISOString()
    };

    // persist booking in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
      existing.push(bookingObj);
      localStorage.setItem('bookings', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to save booking', err);
    }

    setBooking(bookingObj);
    setPage("confirm");
  };

  return (
    <div className="booking-container">
      <div className="booking-back"><button onClick={() => setPage("hall")}>⬅ Back</button></div>
      <h2 className="booking-title">Confirm Booking</h2>

      <div className="booking-body">
        <div>
          <img
            className="booking-poster"
            src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "https://via.placeholder.com/200x300"}
            alt={selectedMovie.Title}
          />
        </div>

        <div className="booking-info">
          <h3>{selectedMovie.Title}</h3>
          <p>Year: {selectedMovie.Year}</p>
          <p>Hall: {selectedHall.name}</p>

          <form onSubmit={handleConfirm} className="booking-form">
            <div className="booking-field">
              <label>Date:</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="booking-field">
              <label>Time:</label>
              <select value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="">Select time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
              </select>
            </div>

            <div className="booking-cta">
              <button type="submit">Confirm Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
