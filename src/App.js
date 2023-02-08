import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import BusAvail from "./pages/BusAvail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bus-avail" element={<BusAvail />} />
    </Routes>
  );
}

export default App;
