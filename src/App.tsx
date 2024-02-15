import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <Router>
        <div className="background">
          <div className="bg-image absolute"></div>
          <div>
            <SideBar />
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<h1>Error</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
