import "./App.css";
import BusDisplay from "./pages/BusDisplay";
import { Home } from "./pages/Home";
import Info from "./pages/Info";
import Payment from "./pages/Payment";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus-display" element={<BusDisplay />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
