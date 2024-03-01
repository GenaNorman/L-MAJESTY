import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage.js";
import Impacts from "./pages/Impacts";
import Votepage from "./pages/Votepage";
import Pagenotfound from "./pages/Pagenotfound.js";
import { NominationContext } from "./context/NominationContext.js";
import Nominiprofile from "./components/Nominiprofile.js";
import initialCandidates from "./assets/initialcandidates.js";

function App() {

  return (
    <NominationContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Aboutpage" element={<Aboutpage />} />
          <Route path="Impacts" element={<Impacts />} />
          <Route path="Votepage" element={<Votepage />}>
            <Route path='user' element={<Nominiprofile />} />
          </Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </NominationContext>
  );
}

export default App;
