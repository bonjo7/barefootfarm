import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='main'>
      <NavBar />
      <div className='wrapper'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
