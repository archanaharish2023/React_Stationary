import React from "react";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col m-0 p-0 bg-lt-blue">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
