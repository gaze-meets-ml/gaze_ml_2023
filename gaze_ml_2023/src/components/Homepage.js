import React, { Fragment } from "react";
import About from "./About";
import Endorsements from "./Endorsements";

function Homepage() {
  return (
    <Fragment>
      <div>
        <About />
        <Endorsements />
      </div>
    </Fragment>
  );
}

export default Homepage;
