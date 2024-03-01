import React from "react";
import initialCandidates from "../assets/initialcandidates";

import { useProvider } from "../context/NominationContext";

function Nominiprofile() {
  const { handleVote, selectedNominie } = useProvider();
  return (
    <>
      <div className="contestant-portal">
        <div className="candit-info">
          <div className="cnst-face">
            <img
              className="contestant-face"
              src="../../public/images/neris.jpg"
              alt="Candidates"
            />
          </div>

          <div>
            {initialCandidates.map((candidate) => (
              <>
                <h2 className="candit-portal-name">{candidate.name}</h2>
                <p className="candit-portal-des">{candidate.desc}</p>
              </>
            ))}
          </div>
        </div>
        <div className="vote">
          <button className="vote-btn" onClick={handleVote}>
            + Vote
          </button>
        </div>
        <div>
          <h2 className="achievements">Candidate Achievements</h2>
        </div>
      </div>
    </>
  );
}

export default Nominiprofile;
