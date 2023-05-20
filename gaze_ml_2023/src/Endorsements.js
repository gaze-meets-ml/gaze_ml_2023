import React from "react";
import MICCAI from "./MICCAIlogo.jpg";

function Endorsements() {
  return (
    <div>
      <h3>Endorsements & Acknowledgements</h3>

      <p> We are a MICCAI endorsed event: </p>

      <div>
        <img src={MICCAI} width="200px" />
      </div>
      <p> Eye gaze logo designed by Michael Chung </p>
    </div>
  );
}

export default Endorsements;
