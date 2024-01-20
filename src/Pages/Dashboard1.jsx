import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LineChartComponent from "../components/Linechart";
import PiechartComponent from "../components/Piechart";
import axios from "axios";
import Loader from "../components/Loader";

function Dashboard1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);


  useEffect(() => {
    getPieChartData();
    getLineChartData();
  }, []);
  // -------------- Fetching Table Data --------------------
  useEffect(() => {
    const getTableData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/table");
        setData(response?.data || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getTableData();
  }, []);

  // ---------------- PieChart Data -----------------------

  const getPieChartData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/pie-chart");
      setPieData(response?.data || []);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  // ---------------- LineChart Data ------------------------

  const getLineChartData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/graph");
      setLineData(response?.data || []);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <React.Fragment>
      <div className="right-section min-vh-100">
        <Container>
          <Row className="header">
            <Col xs={6} className="greeting">
              <p className="morning">Good Morning ! <span style={{fontSize:"15px"}}>☀️</span> </p>
            </Col>
            <Col xs={6} className="header-card">
              <div className="card mt-2" style={{ maxWidth: "500px" }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text mb-0">Jone Doe</p>
                      <p className="card-text mb-0">jone@doe.com</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="../images/Rectangle 10.png"
                      className="img-fluid rounded-start p-4"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* ----------------- LineChart/Piechart ------------------------------- */}
        <Container fluid>
          <Row className="p-4 ">
            <Col md={8}>
              <Card className="card-style">
                <Card.Body>
                  <LineChartComponent data={lineData} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-style">
                <Card.Body>
                  <PiechartComponent data={pieData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* ---------------------Table--------------------------------- */}
        <Container fluid>
          <Row className="p-4 ">
            <Col md={9}>
             
              <table className="table table-striped table-bordered mt-2">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {!loading ? (
                    <>
                      {data?.map((item, i) => {
                        return (
                          <React.Fragment>
                            <tr key={i}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>${item?.price}</td>
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td colSpan={4} className="loader-style">
                          {" "}
                          <Loader />
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>             
            </Col>
            {/*---------------- Profile Section -----------------  */}
            <Col md={3}>
              <div class="card">
                <img
                  src="../images/media.png"
                  class="card-img-top"
                  alt="media"
                  height={200}
                />
                <div class="card-body p-0" id="profile">
                  <p class="card-text mb-0 text-center">John Doe</p>
                  <p class="card-text text-muted text-center mt-1">CEO</p>
                  <div className="container text-center mb-2">
                    <div className="row">
                      <div className="col ">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="../images/facebook.png"
                            alt="Facebook"
                            className="social-icon"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="../images/instagram.png"
                            alt="Instagram"
                            className="social-icon"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="../images/twitter.png"
                            alt="Twitter"
                            className="social-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Dashboard1;
