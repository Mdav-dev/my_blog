import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Announcements from "./Announcements";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
          <Route path="/Home" element={<Home/>} />	
          <Route path="/" element={<Home/>} />	
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/announcements" element={<Announcements/>} />          
          </Routes>
      </div>
    </Router>
  );
}

export default App;
