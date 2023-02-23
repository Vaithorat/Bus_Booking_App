import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import BusAvail from "./pages/BusAvail";
import CusDetails from "./components/CusDetails";
import Payment from "./pages/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bus-avail" element={<BusAvail />} />
      <Route path="/info-page" element={<CusDetails />} />
      <Route path="/payment-page" element={<Payment />} />
    </Routes>
  );
}

export default App;
