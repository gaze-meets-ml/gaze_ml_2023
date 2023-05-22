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
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/presentation">
              <Presentation />
            </Route>
            <Route  path="/speakers">
              <Speakers />
            </Route>
            <Route  path="/sponsors">
              <Sponsors />
            </Route>
            <Route  path="/blog">
              <Blog />
            </Route>
            <Route  path="/faqs">
              <FAQs />
            </Route>
            <Route  path="/">
              <Homepage />
            </Route>
            <Route  path="/endorsement">
              <Endorsements />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


// App