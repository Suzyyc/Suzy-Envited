import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
