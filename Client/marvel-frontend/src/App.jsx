import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
