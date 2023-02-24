import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Homepage";
import BusAvail from "./Pages/BusAvail";
import InfoPage from "./Pages/InfoPage";
import Payment from "./Pages/Payment";

function App() {
  const [authentication, setAuthentication] = useState(false);
  return (
    <div className="App">
      <Navbar
        authentication={authentication}
        setAuthentication={setAuthentication}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                authentication={authentication}
                setAuthentication={setAuthentication}
              />
            }
          />
          <Route path="/availablebus" element={<BusAvail />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
