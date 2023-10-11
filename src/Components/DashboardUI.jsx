import React from "react";
import Searchbar from "./Searchbar";
import TableContent from "./TableContent";
import FormDetail from "./FormDetail";

function DashboardUI() {
  return (
    <div className="container-fluid right-portion">
      <div>
        <div className="mt-4">
          <Searchbar />
          <div className="container mx-2 pe-4">
            <h4>Sales Information</h4>
            <FormDetail />
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUI;
