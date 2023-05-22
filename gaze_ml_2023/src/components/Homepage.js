import React, { Fragment } from "react";
import About from "./About";
import Endorsements from "./Endorsements";

function Homepage() {
  return (
    <Fragment>
      <div>
        <About />
        <Endorsements />
        <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid #ccc" }} />
        <div style={{ textAlign: "center", fontFamily: "cursive", marginBottom: "20px" }}>
          Bridging human and machine attention
        </div>
      </div>
    </Fragment>
  );
}

export default Homepage;
