import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Features from "./Features";
import Loader from "../layout/Loader";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductTypes from "./ProductTypes";
import FeaturedProduct from "./FeaturedProduct";
import ProductTabs from "./ProductTabs";
import Journal from "./Journal";

const captions = [
  "Unleash Your Creativity with Our Exquisite Stationary Collection",
  "Elevate Your Stationary Experience: Premium Quality, Endless Inspiration.",
  "Your Journey Starts Here: Explore a World of Artistry in Stationary.",
];

const topBrands = [
  {
    name: "CAMEL",
    logo: "https://cdn.shortpixel.ai/spai/q_lossy+to_webp+ret_img/https://1.bp.blogspot.com/-cpYRn35Yr7Y/WYxJqySL7nI/AAAAAAAAIWo/24qB7Ej_UXQ1tTAjDDVuisIku53AMKpUQCLcBGAs/s1600/camlin-stationery-brand-logo.jpg", // Add the URL for the brand 1 logo
  },
  {
    name: "PILOT",
    logo: "https://4.bp.blogspot.com/-rhJTW79jOT0/WYxJtt7bOzI/AAAAAAAAIXs/fJCbtjtlspktA6oUqtPSCzlTL_ouOntfQCLcBGAs/s1600/pilot-stationery-brand-logo.png", // Add the URL for the brand 2 logo
  },
 
  {
    name: "PILOT",
    logo: "https://4.bp.blogspot.com/-vtNjD4ms-fM/WYxJrZuSC2I/AAAAAAAAIW0/LSffkPLE2woh-zkf3cJI0Ue0oS5pHBC9QCLcBGAs/s1600/classmate-stationery-brand-logo.png", // Add the URL for the brand 2 logo
  },
  {
    name: "Nataraj",
    logo: "https://3.bp.blogspot.com/-m5VAETa9Xzc/WYxMCV1pQxI/AAAAAAAAIYA/Jqe2-m14fNAwyvha8RNJwMCwHXormFRhQCLcBGAs/s1600/nataraj-stationery-brand-logo.png",
  },

  // Add more top brands as needed
];
const featuredOffersData = [
  {
    title: "Unbeatable Deals Inside ",
    description: "Grab 20% OFF on Premium Stationery!",
  },
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleOnChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Header />
      {loading ? (
        <>
          <div className="loader-container">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            interval={5000}
            stopOnHover={false}
            showArrows={true}
            selectedItem={activeIndex}
            onChange={handleOnChange}
          >
            <div className="carousel-slide">
              <img
                src="https://images.unsplash.com/photo-1631173716529-fd1696a807b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdGlvbmVyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="Slide 1"
              />
              <div
                className={`carousel-text ${
                  activeIndex === 0 ? "visible" : ""
                }`}
              >
                {captions[0]}
              </div>
            </div>
            <div className="carousel-slide">
              <img
                src="https://freerangestock.com/sample/144965/stationery-on-green-background.jpg"
                alt="Slide 2"
              />
              <div
                className={`carousel-text ${
                  activeIndex === 1 ? "visible" : ""
                }`}
              >
                {captions[1]}
              </div>
            </div>
            <div className="carousel-slide">
              <img
                src="https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg"
                alt="Slide 3"
              />
              <div
                className={`carousel-text ${
                  activeIndex === 2 ? "visible" : ""
                }`}
              >
                {captions[2]}
              </div>
            </div>
          </Carousel>

          {/* ------------------ Features */}

          <Features />

          {/*------------------- Cards */}

          <div className="card-style">
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col md={6} className="mb-4">
                  <Card className="latest-arrivals">
                    <Card.Body>
                      <Card.Title>Latest Arrivals</Card.Title>
                      <Card.Text className="animated-text">
                        New items just arrived!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} className="mb-4">
                  <Card className="kids-favorites">
                    <Card.Body>
                      <Card.Title>Kids Favorites</Card.Title>
                      <Card.Text className="animated-text">
                        Top picks for kids!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          {/* --------------------Features */}

          <div className="featured-offers">
            {/* <h2>Offers and Promotions</h2> */}
            <div className="offers-container">
              {featuredOffersData.map((offer, index) => (
                <div key={index} className="offer-card">
                  <h3>{offer?.title}</h3>
                  <p>{offer?.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --------------------Product Types */}

          <ProductTypes />

          {/* -----------------Types */}

          <div className="card-container">
            <div className="card card1">
              <div className="card-content">
                <h3>Office Supplies</h3>
                <p>
                  {" "}
                  Explore our wide range of office supplies to keep your
                  workplace organized and efficient.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------FeatuedProducts */}

          <FeaturedProduct />

          <div className="card-container">
            <div className="card card2">
              <div className="card-content">
                <h3>Stationary</h3>
                <p>
                  Browse stylish and functional stationary items for creativity.
                </p>
              </div>
            </div>
          </div>
          <ProductTabs />
          {/* -------------------------Banner */}
          <div className="card-container">
            <div className="card card3">
              <div className="card-content">
                <h3>School Supplies</h3>
                <p className="banner-p">
                  Get ready for the new school year with high-quality essentials
                </p>
              </div>
            </div>
          </div>
          {/* ------------------Journey */}
          <Journal />
          {/* ------------------------Top Brands */}
          <div className="top-brands-container">
            <h2 className="section-title">Top Brands</h2>
            <div className="brand-grid">
              {topBrands.map((brand, index) => (
                <div key={index} className="brand-item">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo"
                  />
                  {/* <h3>{brand.name}</h3> */}
                  {/* <p>{brand.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default HomePage;
