import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function FeaturedProduct() {
  const featuredProducts = [
    {
      name: "Modern Journey Book",
      price: "₹399",
      offerPrice: "₹349",
      discount: "20% off",
      image: "https://pageflutter.com/wp-content/uploads/2018/03/Etsy.jpg",
    },
    {
      name: "Stylish Unicorn Pouch",
      price: "₹499",
      offerPrice: "₹349",

      discount: "15% off",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUbJqo_eE1K5lpepogSYTxKB6bHEpKQdP5hqY7suk1RGSWAv25qNnUsvuM0p3at897ag&usqp=CAU",
    },
    {
      name: "Stapler plus 4 Packet stapler Pin ",
      price: "₹123",
      offerPrice: "₹109",

      discount: "10% off",
      image: "https://m.media-amazon.com/images/I/71K9RhlRTIL.jpg",
    },
    {
      name: "Planner Set",
      price: "499",
      offerPrice: "₹349",
      discount: "10% off",
      image:
        "https://cdn.shopify.com/s/files/1/0330/3625/files/when-to-use-stationery-or-stationary.jpg?v=1632147471",
    },
    {
      name: "Kawai cute Little set",
      price: "₹299",
      offerPrice: "₹149",

      discount: "15% off",
      image:
        "https://images-cdn.ubuy.co.in/634fc167a525604dc3732dfe-cute-stationary-set-for-girls-kids.jpg",
    },
    {
      name: " Journey Book ",
      price: "₹123",
      offerPrice: "100",
      discount: "10% off",
      image: "https://cdn.pixabay.com/photo/2018/02/11/22/21/paper-3146952_640.jpg",
    },
  ];

  return (
    <>
      <div className="featured-products-container">
        <Container>
          <h2 className="section-title">Featured Products</h2>
          <Row >
            {featuredProducts.map((product, index) => (
              <Col key={index} md={4} className="product-card">
                <Card className="featured-card">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="original-price">
                      {product.price}
                    </Card.Text>
                    <Card.Text className="offer-price">
                      {product.offerPrice}
                    </Card.Text>

                    <Card.Text className="discount">
                      {product.discount}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FeaturedProduct;
