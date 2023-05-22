import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router basename="/gaze_ml_2023">
      <div className="App">
        <div className="page-container">
          <AppHeader />
          <br />
          <br />

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/presentation">
              <Presentation />
            </Route>
            <Route exact path="/speakers">
              <Speakers />
            </Route>
            <Route exact path="/sponsors">
              <Sponsors />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/faqs">
              <FAQs />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/endorsement">
              <Endorsements />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
