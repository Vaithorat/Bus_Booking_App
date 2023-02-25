import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Homepage";
import BusAvail from "./Pages/BusAvail";
import InfoPage from "./Pages/Infopage";
import Payments from "./Pages/Payments";

function App() {
  const [authentication, setAuthentication] = useState(false);
  return (
    <div className="App">
      <Header
        authentication={authentication}
        setAuthentication={setAuthentication}
      />
      <div>
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
          <Route path="/payment" element={<Payments />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
