import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="background">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
