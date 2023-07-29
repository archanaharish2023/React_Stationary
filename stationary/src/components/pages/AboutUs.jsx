import React from 'react'
import Header from '../layout/Header'
import Footer from "../layout/Footer"

function AboutUs() {
  return (
    <>
    <Header/>
    <div className="about-us-section" >
      <div className="content-container">
        
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            risus bibendum, faucibus nisl eu, tincidunt libero. Nam tincidunt
            libero ut risus sodales, ac lacinia dolor sagittis. In tincidunt
            iaculis nisi ac ullamcorper.
          </p>
          <p>
            Aenean volutpat velit non ligula finibus, at sodales odio accumsan.
            Nunc varius nibh eget nisi consequat, vel egestas quam pellentesque.
            Duis in leo non nunc blandit ultricies.
          </p>
          <p>
            Aenean volutpat velit non ligula finibus, at sodales odio accumsan.
            Nunc varius nibh eget nisi consequat, vel egestas quam pellentesque.
            Duis in leo non nunc blandit ultricies.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs