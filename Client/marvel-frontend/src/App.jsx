import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
