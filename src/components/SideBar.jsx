import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
function SideBar() {
  const location = useLocation();

  return (
    <React.Fragment>
      <div
        className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-darkblue"
        id="sidebar"
      >
        <div
          className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2   min-vh-100"
          id="sidebar-list"
        >
          <div className="briefcase-section">
            <img
              src="../images/Briefcase.png"
              alt="Briefcase"
              className="briefcase"
            />
            <br></br>
            <img
              src="../images/statBoard.png"
              alt="statboard"
              className="statboard"
            />
          </div>

          <ul className="nav nav-pills flex-column  mt-5" id="menu">
            <li>
              <Link
                to="/"
                className={
                  location?.pathname == "/"
                    ? "nav-link nav-item active px-4 "
                    : "nav-link nav-item  px-4 "
                }
              >
                <img src="../images/Circled Menu.png" alt="" />{" "}
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={
                  location?.pathname == "/support"
                    ? "nav-link nav-item active px-4 "
                    : "nav-link nav-item  px-4 "
                }
              >
                <img src="../images/Support.png" alt="" />{" "}
                <span className="ms-1 d-none d-sm-inline">Support</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link nav-item px-4  ">
                <img src="../images/Puzzle.png" alt="" />{" "}
                <span className="ms-1 d-none d-sm-inline">Plugins</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link nav-item px-4 ">
                <img src="../images/Help.png" alt="" />{" "}
                <span className="ms-1 d-none d-sm-inline">Help</span>
              </Link>
            </li>
          </ul>
          <hr />
          <Row className="sidebar-logout">
            <Col xs={12}>             
              <button className="logout-button" >
              <img src="../images/shutdown.png" alt="" />
                Logout
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBar;
