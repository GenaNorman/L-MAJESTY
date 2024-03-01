
import React from "react";
import Sidebarnominate from "./Sidebarnominate";
import Nominiprofile from "./Nominiprofile";

function Nomination() {
  return (
    <div className="contestants">
      <CandidateHeading />
      <div className="contestant-block">
        <Sidebarnominate />
        <Nominiprofile />
      </div>
    </div>
  );
}
function CandidateHeading() {
  return (
    <div className="contestant-controls">
      <div className="nominate">
        <div className="vote-dtls">
          <h2>Nominated Candidate</h2>
          <span className="dtls1">Nominated:x</span>
          <span className="dtls1">Voted:x</span>
        </div>
        <div className="candidate-profile"></div>
      </div>

      <div className="candidate-details">candidate list</div>
    </div>
  );
}
export default Nomination;
