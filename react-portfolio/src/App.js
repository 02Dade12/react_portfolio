import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
