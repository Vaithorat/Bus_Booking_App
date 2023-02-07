import "./App.css";
import Advert from "./components/Advert";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Selector />
      <Advert />
      <Review  />
      <Footer/>
    </div>
  );
}

export default App;
