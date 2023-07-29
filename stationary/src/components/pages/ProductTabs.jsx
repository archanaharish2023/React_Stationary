import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { RiPercentLine } from "react-icons/ri";

const ProductTabs = () => {
  // Sample data for latest products and best sellers
  const latestProducts = [
    {
      name: "Product 1",
      image:
        "https://offimart.com/4688-large_default/multi-colour-binder-clips-32mm-24-pcs.jpg", // Add the URL for the product image
      originalPrice: 100,
      offerPrice: 80,
    },
    {
      name: "Product 2",
      image:
        "https://i0.wp.com/wisycart.com/wp-content/uploads/2022/09/WBM-Blue-sqr-img.png?fit=1905%2C1905&ssl=1", // Add the URL for the product image
      originalPrice: 150,
      offerPrice: 120,
    },
    {
      name: "Product 1",
      image:
        "https://offimart.com/4688-large_default/multi-colour-binder-clips-32mm-24-pcs.jpg", // Add the URL for the product image
      originalPrice: 100,
      offerPrice: 80,
    },
    {
      name: "Product 2",
      image:
        "https://i0.wp.com/wisycart.com/wp-content/uploads/2022/09/WBM-Blue-sqr-img.png?fit=1905%2C1905&ssl=1", // Add the URL for the product image
      originalPrice: 150,
      offerPrice: 120,
    },
    {
      name: "Product 1",
      image:
        "https://offimart.com/4688-large_default/multi-colour-binder-clips-32mm-24-pcs.jpg", // Add the URL for the product image
      originalPrice: 100,
      offerPrice: 80,
    },
    {
      name: "Product 2",
      image:
        "https://i0.wp.com/wisycart.com/wp-content/uploads/2022/09/WBM-Blue-sqr-img.png?fit=1905%2C1905&ssl=1", // Add the URL for the product image
      originalPrice: 150,
      offerPrice: 120,
    },
    {
      name: "Product 1",
      image:
        "https://offimart.com/4688-large_default/multi-colour-binder-clips-32mm-24-pcs.jpg", // Add the URL for the product image
      originalPrice: 100,
      offerPrice: 80,
    },
    {
      name: "Product 2",
      image:
        "https://i0.wp.com/wisycart.com/wp-content/uploads/2022/09/WBM-Blue-sqr-img.png?fit=1905%2C1905&ssl=1", // Add the URL for the product image
      originalPrice: 150,
      offerPrice: 120,
    },
    // Add more latest products as needed
  ];

  const bestSellers = [
    {
      name: "Product A",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/xif0q/paint/5/2/k/15-9-48pcs-watercolor-paint-set-with-tin-box-venimall-original-imagmevhgyxbhhy9.jpeg?q=90", // Add the URL for the product image
      originalPrice: 50,
      offerPrice: 40,
    },
    {
      name: "Product B",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/kuk4u4w0/paint-brush/3/t/j/artist-black-golden-painting-brushes-set-of-12-pcs-professional-original-imag7nufgcfdjhac.jpeg?q=90", // Add the URL for the product image
      originalPrice: 80,
      offerPrice: 60,
    },
    {
      name: "Product A",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/xif0q/paint/5/2/k/15-9-48pcs-watercolor-paint-set-with-tin-box-venimall-original-imagmevhgyxbhhy9.jpeg?q=90", // Add the URL for the product image
      originalPrice: 50,
      offerPrice: 40,
    },
    {
      name: "Product B",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/kuk4u4w0/paint-brush/3/t/j/artist-black-golden-painting-brushes-set-of-12-pcs-professional-original-imag7nufgcfdjhac.jpeg?q=90", // Add the URL for the product image
      originalPrice: 80,
      offerPrice: 60,
    },
    {
      name: "Product A",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/xif0q/paint/5/2/k/15-9-48pcs-watercolor-paint-set-with-tin-box-venimall-original-imagmevhgyxbhhy9.jpeg?q=90", // Add the URL for the product image
      originalPrice: 50,
      offerPrice: 40,
    },
    {
      name: "Product B",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/kuk4u4w0/paint-brush/3/t/j/artist-black-golden-painting-brushes-set-of-12-pcs-professional-original-imag7nufgcfdjhac.jpeg?q=90", // Add the URL for the product image
      originalPrice: 80,
      offerPrice: 60,
    },
    {
      name: "Product A",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/xif0q/paint/5/2/k/15-9-48pcs-watercolor-paint-set-with-tin-box-venimall-original-imagmevhgyxbhhy9.jpeg?q=90", // Add the URL for the product image
      originalPrice: 50,
      offerPrice: 40,
    },
    {
      name: "Product B",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/kuk4u4w0/paint-brush/3/t/j/artist-black-golden-painting-brushes-set-of-12-pcs-professional-original-imag7nufgcfdjhac.jpeg?q=90", // Add the URL for the product image
      originalPrice: 80,
      offerPrice: 60,
    },
    // Add more best sellers as needed
  ];

  return (
    <div className="product-tabs-container">
      <Tabs defaultActiveKey="latest" id="product-tabs">
        <Tab eventKey="latest" title="Latest Products">
          <div className="product-list">
            {latestProducts.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-offer">
                  20
                  <RiPercentLine className="offer-icon" />
                  OFF
                </div>
                <div className="product-prices">
                  <span className="original-price">
                    Rs. {product.originalPrice}
                  </span>
                  <span className="offer-price">Rs. {product.offerPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="best-sellers" title="Best Sellers">
          <div className="product-list">
            {bestSellers.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-offer">
                  20
                  <RiPercentLine className="offer-icon" />
                  OFF
                </div>
                <div className="product-prices">
                  <span className="original-price">
                    Rs. {product.originalPrice}
                  </span>
                  <span className="offer-price">Rs. {product.offerPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
