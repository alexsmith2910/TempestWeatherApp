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
          <div className="bg-image -z-10"></div>
          <div className="container">
            <div className="flex flex-row flex-wrap">
              <div className="w-full sm:w-1/3 md:w-[20rem]">
                <div className="sticky top-0 w-full">
                  <SideBar />
                </div>
              </div>
              <main role="main" className="w-full flex-grow sm:w-2/3 md:w-max">
                <div className="wrapper">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<h1>Error</h1>} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
