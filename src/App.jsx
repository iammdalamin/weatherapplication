import Nav from "./components/nav/Nav"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

function App() {

  return (
  <Router>
      <Nav />

  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="*" element={`404 Not Found`} />
  </Routes>

  </Router>
  )
}

export default App
