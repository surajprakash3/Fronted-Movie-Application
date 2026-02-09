import { useState } from "react";
// App.css merged into index.css — import removed
import Register from "./component/Register";
import Login from "./component/Login";
import Success from "./component/Success";
import Navbar from "./component/Navbar";
import Hall from "./component/Hall";
import Booking from "./component/Booking";
import Confirm from "./component/Confirm";
import Footer from "./component/Footer";


function App() {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);
  const [booking, setBooking] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <Navbar user={user} setUser={setUser} setPage={setPage} />

      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} setUser={setUser} />}

      {page === "success" && (
        <Success setPage={setPage} setSelectedMovie={setSelectedMovie} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
      )}

      {page === "hall" && (
        <Hall selectedMovie={selectedMovie} selectedCity={selectedCity} setPage={setPage} setSelectedHall={setSelectedHall} />
      )}

      {page === "booking" && (
        <Booking
          user={user}
          selectedMovie={selectedMovie}
          selectedHall={selectedHall}
          setBooking={setBooking}
          setPage={setPage}
        />
      )}

      {page === "confirm" && (
        <Confirm
          booking={booking}
          user={user}
          selectedMovie={selectedMovie}
          selectedHall={selectedHall}
          setPage={setPage}
        />
      )}
      <Footer user={user} setUser={setUser} setPage={setPage} />
    </>
  );
}

export default App;
