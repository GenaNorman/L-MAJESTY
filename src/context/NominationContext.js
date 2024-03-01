import React, { createContext, useContext, useState } from "react";
import Sidebarnominate from "../components/Sidebarnominate";

const nominationContext = createContext();
function NominationContext({ children }) {
  const [vote, setVote] = useState(0);
  const [selectedNominie, setSelectedNominie] = useState({});

  function handleVote(e) {
    e.preventDefault();
    console.log(Sidebarnominate);
    setVote(vote + 1);
  }
  function handleSelectedNominie(candidate) {
    setSelectedNominie((cur) =>
      cur?.name === candidate.name ? null : candidate
    );
    console.log(candidate)
  }

  return (
    <nominationContext.Provider
      value={{
        vote,
        setVote,
        handleVote,
        selectedNominie,
        handleSelectedNominie,
      }}
    >
      {children}
    </nominationContext.Provider>
  );
}
function useProvider() {
  const context = useContext(nominationContext);
  if (context === undefined)
    throw new Error("Post conntext was used outside the nomination provider");
  return context;
}

export { NominationContext, useProvider };
