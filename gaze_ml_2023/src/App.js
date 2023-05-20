import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import About from "./About";
import { AppHeader } from "./AppHeader";
import Presentation from "./Presentations";
import Endorsements from "./Endorsements";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/presentation" element={<Presentation />} />
        </Routes>
        <Endorsements />
      </div>
    </Router>
  );
}

export default App;
