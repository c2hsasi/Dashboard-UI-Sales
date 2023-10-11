import React from "react";
import Sidebar from "./Components/Sidebar";
import DashboardUI from "./Components/DashboardUI";

function App() {
  return (
    <>
      <div className="d-flex flex-nowrap" id="wrapper">
        <Sidebar />
        <DashboardUI />
      </div>
    </>
  );
}

export default App;
