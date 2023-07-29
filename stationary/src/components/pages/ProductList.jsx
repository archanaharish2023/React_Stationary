import React from "react";
import Header from "../layout/Header";

function ProductList() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image:
        "https://m.media-amazon.com/images/I/51YQzFPXbGL._AC_UF1000,1000_QL80_.jpg", // Add the URL for the product image
      price: 10.99,
    },
    {
      id: 2,
      title: "Product 2",
      image:
        "https://sc04.alicdn.com/kf/H8ee576a9dc20418e950b1638353903d4j.jpg", // Add the URL for the product image
      price: 19.99,
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      image:
        "https://ae01.alicdn.com/kf/A23a7915819a64f94b38f5e5066784a7ab/Cartoon-Floral-Sticker-Tape-Pen-Notebook-Diary-Decoration-Funny-Kids-Stationery-Correction-Tape-Diary-Stationery-School.jpg",
    },
    {
        id: 1,
        title: "Product 1",
        image:
          "https://m.media-amazon.com/images/I/51YQzFPXbGL._AC_UF1000,1000_QL80_.jpg", // Add the URL for the product image
        price: 10.99,
      },
      {
        id: 2,
        title: "Product 2",
        image:
          "https://sc04.alicdn.com/kf/H8ee576a9dc20418e950b1638353903d4j.jpg", // Add the URL for the product image
        price: 19.99,
      },
      {
        id: 2,
        title: "Product 2",
        price: 19.99,
        image:
          "https://ae01.alicdn.com/kf/A23a7915819a64f94b38f5e5066784a7ab/Cartoon-Floral-Sticker-Tape-Pen-Notebook-Diary-Decoration-Funny-Kids-Stationery-Correction-Tape-Diary-Stationery-School.jpg",
      },
    // Add more products as needed
  ];
  return (
    <React.Fragment>
      <Header />
      {/* <h2 className="product-heading">Our Products</h2> */}
      <div className="product-lists">
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
