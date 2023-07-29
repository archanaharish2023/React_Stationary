import React from "react";

function ProductTypes() {
  const productData = [
    {
      name: "Eraser",
      image:
        "https://e.staedtlercdn.com/fileadmin/_processed_/a/a/csm_UK_STAEDTLER-Erasers_e0fa8ce60c.jpg",
    },
    {
      name: "Gel Pen",
      image:
        "https://www.htconline.in/images/thumbs/0031119_pentel-roller-gel-pen-07mm-bl417-blue_600.jpeg",
    },
    {
      name: "Roller Pen",
      image:
        "https://img3.exportersindia.com/product_images/bc-full/2019/10/6691958/roller-pen-1570789372-5112809.jpeg",
    },
    {
      name: "Fountain Pen",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen.jpg",
    },
    {
      name: "HB Pencil",
      image:
        "https://5.imimg.com/data5/OJ/JQ/RT/SELLER-12745475/hb-wooden-pencil.jpg",
    },
    {
      name: "Roller Pen",
      image:
        "https://www.submarinepens.com/wp-content/uploads/2020/10/1501-RP.jpg",
    },

    {
      name: "Ruled Book",
      image:
        "https://thefaceshop.in/cdn/shop/products/Notebook_700x700.jpg?v=1650353746",
    },
    {
      name: "Plain Book",
      image:
        "https://image.shutterstock.com/image-photo/school-notebook-glasses-coffee-on-260nw-462846523.jpg",
    },
    {
      name: "Planner",
      image:
        "https://type7.in/cdn/shop/collections/Weekly_Planner-1.jpg?v=1672999152",
    },
    {
      name: "Sticky Notes",
      image:
        "https://cdn.create.vista.com/api/media/small/388858022/stock-photo-student-opem-sticky-note-taking",
    },
    {
      name: "Shapner",
      image:
        "https://rukminim1.flixcart.com/image/850/1000/kvo55zk0/learning-toy/1/m/a/sharpener-for-kids-rainbow-pencil-sharpener-table-sharpener-original-imag8gt6tvycfycq.jpeg?q=90",
    },
    {
      name: "Sketch Pen",
      image:
        "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-colour-durable-sketch-pen-for-kids-108262-m.jpg",
    },
  ];
  return (
    <React.Fragment>
      {/* <h2 className="section-title">Our Products</h2>  */}
      <div className="product-types-container">
        {productData.map((product, index) => (
          <div key={index} className="product-type-item">
            <img src={product.image} alt={product.name} />
            <p className="text-style">{product.name}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ProductTypes;
