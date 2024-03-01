import React, { useState } from "react";
import { useProvider } from "../context/NominationContext";
import { NavLink } from "react-router-dom";
import initialCandidates from "../assets/initialcandidates";
// function Button({ children, onClick }) {
//   return (
//     <button className="btn" onClick={onClick}>
//       {children}
//     </button>
//   );
// }
function Sidebarnominate() {
  const [nominee, setNominee] = useState({})

  return (
    <div className="contestant-left">
      <ul className="contestant-list">
        {initialCandidates.map((candidate) => (
          // setNominee(candidate)
          <Candidate candidate={candidate} key={candidate.id} />
        ))}
      </ul>
    </div>
  );
}
function Candidate({ candidate }) {
  const { vote, handleSelectedNominie } = useProvider();
  return (
    <NavLink to='user'>
      <li className="contestant-lists">
        <img className="candit-face" src={candidate.image} alt={candidate.id} />
        <div className="candit-action">
          <p className="candit-name">{candidate.name}</p>
          <p className="candit-department">{candidate.department}</p>
          <p className="candit-votes">{vote}votes</p>
          <button className="see" onClick={handleSelectedNominie}>
            view
          </button>
        </div>
      </li>
    </NavLink>
  );
}
export default Sidebarnominate;
