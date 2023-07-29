import React from 'react'

function Features() {
  return (
  <React.Fragment>
   <div className="features-section">
      <div className="feature-item">
        {/* <img src="https://fontawesome.com/social/truck-fast?f=&s=" alt="Free Shipping" /> */}
        <i class="fa-solid fa-truck-fast fa-2xl"></i>
        <div className="feature-text">Free Shipping</div>
      </div>
      <div className="feature-item">
        {/* <img src="https://fontawesome.com/social/truck-fast?f=&s=" alt="Easy Payment" /> */}
        <i class="fa-solid fa-credit-card fa-2xl"></i>
        <div className="feature-text">Easy Payment</div>
      </div>
      <div className="feature-item">
        {/* <img src="https://fontawesome.com/social/truck-fast?f=&s=" alt="GST Invoice" /> */}
        <i class="fa-solid fa-receipt fa-2xl"></i>
        <div className="feature-text">GST Invoice</div>
      </div>
      <div className="feature-item">
        {/* <img src="https://fontawesome.com/social/truck-fast?f=&s=" alt="Pan India Delivery" /> */}
        <i class="fa-solid fa-bag-shopping fa-2xl"></i>
        <div className="feature-text">Pan India Delivery</div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Features