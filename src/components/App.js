import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
          <Route path="/" element={<Home/>} />	
          <Route path="/about" element={<About/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
