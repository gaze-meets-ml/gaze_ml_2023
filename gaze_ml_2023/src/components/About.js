import React from "react";
import eye from "../eye.png";

function About() {
  return (
    <div>
      <div>
        <img src={eye} width="200px" alt="Eye gaze" />
      </div>
      <h4>About</h4>
      <div align="left">
        <blockquote>
          <p className="justified-text">
            Eye gaze has proven to be a cost-efficient way to collect
            large-scale physiological data that can reveal the underlying human
            attentional patterns in real life workflows, and thus has long been
            explored as a signal to directly measure human-related cognition in
            various domains. Physiological data (including but not limited to
            eye gaze) offer new perception capabilities, which could be used in
            several ML domains, e.g., egocentric perception, embodiedAI, NLP,
            etc. They can help infer human perception, intentions, beliefs,
            goals and other cognition properties that are much needed for
            human-AI interactions and agent coordination. In addition, large
            collections of eye-tracking data have enabled data-driven modeling
            of human visual attention mechanisms, both for saliency or scanpath
            prediction, with twofold advantages: from the neuroscientific
            perspective to understand biological mechanisms better, from the AI
            perspective to equip agents with the ability to mimic or predict
            human behavior and improve interpretability and interactions.
          </p>
        </blockquote>
      </div>

      <div align="left">
        <blockquote>
          <p className="justified-text">
            With the emergence of immersive technologies, now more than any time
            there is a need for experts of various backgrounds (e.g., machine
            learning, vision, and neuroscience communities) to share expertise
            and contribute to a deeper understanding of the intricacies of
            cost-efficient human supervision signals (e.g., eye-gaze) and their
            utilization towards by bridging human cognition and AI in machine
            learning research and development. The goal of this workshop is to
            bring together an active research community to collectively drive
            progress in defining and addressing core problems in gaze-assisted
            machine learning.
          </p>
          <p>
            For more information, you can explore the details of the 2022 Gaze
            Meet ML workshop at the provided link:{" "}
            <a href="https://gaze-meets-ml.github.io/gaze_ml_2022/">
              2022 Gaze Meet ML Workshop
            </a>
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default About;
