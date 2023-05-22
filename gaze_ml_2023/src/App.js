import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import { AppHeader } from "./components/AppHeader";
import Presentation from "./components/Presentations";
import Endorsements from "./components/Endorsements";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Homepage from "./components/Homepage";
import FAQs from "./components/FAQs";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <div className="page-container">
            <AppHeader />
            <br />
            <br />
            <Routes>
              <Route  path="/about" element={<About />} />
              <Route  path="/presentation" element={<Presentation />} />
              <Route  path="/speakers" element={<Speakers />} />
              <Route  path="/sponsors" element={<Sponsors />} />
              <Route  path="/blog" element={<Blog />} />
              <Route  path="/faqs" element={<FAQs />} />
              <Route  path="/" element={<Homepage />} />
              <Route  path="/endorsement" element={<Endorsements />} />
            </Routes>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
