import { useState } from "react";

const initialCandidates = [
  {
    id: "422321",
    image: "../images/ndi.jpg",
    name: "Monkey D Luffy",
    department: "Engineering",
    votes: "10",
    desc: "Lorem vdzfihzb vhxd dgxgxiu gvxbgixbx ihjv xigbxuibgux grxbrxibgjf jx rujb",
  },
  {
    id: "4223121",
    image: "../images/ndi.jpg",
    name: "Monkey D Luffy",
    department: "Engineering",
    votes: "10",
    desc: "Lorem vdzfihzb vhxd dgxgxiu gvxbgixbx ihjv xigbxuibgux grxbrxibgjf jx rujb",
  },
  {
    id: "4222222",
    image: "../images/neris.jpg",
    name: "Ponkey",
    department: "Enginehggcrfycrering",
    votes: "1087",
    desc: "lkjasklhdfiouwaoer awerio rflujaklwsf awer ojrefu awefkjhdf aweoifjhioryhqwkfd fklsajfd a lkjasklhdfiouwaoer awerio rflujaklwsf awer ojrefu awefkjhdf aweoifjhioryhqwkfd fklsajfd a",
  },
  {
    id: "4222222",
    image: "../images/neris.jpg",
    name: "Ponkey",
    department: "Enginehggcrfycrering",
    votes: "1087",
    desc: "lkjasklhdfiouwaoer awerio rflujaklwsf awer ojrefu awefkjhdf aweoifjhioryhqwkfd fklsajfd a lkjasklhdfiouwaoer awerio rflujaklwsf awer ojrefu awefkjhdf aweoifjhioryhqwkfd fklsajfd a",
  },

];

function Nomination() {
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);

  function handleSelectCandidate(id) {
    setSelectedCandidateId((selectedCandidateId) =>
      selectedCandidateId === id ? null : id
    );
  }
  function handleCloseCandidate() {
    setSelectedCandidateId(null);
  }
  return (
    <div className="contestants">
      <CandidateHeading />
      <CandidateMainBlock>
        <CandidateList
          onSelectCandidate={handleSelectCandidate}
          onCloseCandidate={handleCloseCandidate}
        />
        {/* <Candidate onSelectCandidate={handleSelectCandidate} />
        <CandidateList /> */}
        <CandidateProfile candidate={selectedCandidateId} />
      </CandidateMainBlock>
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
function CandidateMainBlock({ children }) {
  return <div className="contestant-block">{children}</div>;
}

function CandidateList({ onSelectCandidate, onCloseCandidate }) {
  return (
    <ul className="contestant-list">
      {initialCandidates.map((candidate) => (
        <Candidate
          onSelectCandidate={onSelectCandidate}
          onCloseCandidate={onCloseCandidate}
          candidate={candidate}
          key={candidate.id}
        />
      ))}
    </ul>
  );
}
function Candidate({ candidate, onSelectCandidate }) {
  return (
    <li
      className="contestant-lists"
      onClick={() => onSelectCandidate(candidate.id)}
    >
      <img className="candit-face" src={candidate.image} alt={candidate.id} />
      <div className="candit-action">
        <p className="candit-name">{candidate.name}</p>
        <p className="candit-department">{candidate.department}</p>
        <p className="candit-votes">{candidate.votes}</p>
        <button className="see">view</button>
      </div>
    </li>
  );
}
function CandidateProfile({ candidate }) {
  const currentItem = initialCandidates.filter(
    (can) => can.id === candidate
  )[0];
  return (
    <>
      <div className="contestant-portal">
        <div className="candit-info">
          <img
            className="contestant-face"
            src={currentItem?.image}
            alt={currentItem?.name}
          />
          <div>
            <h2 className="candit-bg">{currentItem?.name}</h2>
            <p className="candit-bg">{currentItem?.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nomination;
