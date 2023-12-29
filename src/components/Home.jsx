import React from "react";

function Home() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="header">
          <h1 className="content">
            Epic Games : An American video game and software developer<br></br>
            and publisher based in Cary, North Carolina.
          </h1>
        </div>

        <div className="banner">
          <img src="images/hero-banner.png" alt="" />
        </div>

        <div className="text">
          <div className="content">
            <p>
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or <br></br>
              live event, or discover over a million creator made games,
              including racing, parkour, zombie survival, and more. Each
              Fortnite island has <br></br>
              an individual age rating so you can find the one that's right for
              you and your friends. Find it all in Fortnite ... Drop In.
            </p>
          </div>
        </div>

        <div className="visit">
          <a href="">Visit Website</a>
        </div>

        <div className="image-container">
          <div className="image-box">
            <img src="images/group1.png" alt="Image 1" />
            <div className="image-text">
              Explore large, destructible <br></br>
              environments where no two games <br></br>
              are ever the same.
            </div>
          </div>

          <div className="image-box">
            <img src="images/group2.png" alt="Image 2" />
            <div className="image-text">
              Team up with friends by sprinting, <br></br>
              climbing and smashing your way to<br></br>
              earn your Victory Royale
            </div>
          </div>

          <div className="image-box">
            <img src="images/group3.png" alt="Image 3" />
            <div className="image-text">
              Discover even more ways to play <br></br>
              across thousands of creator-made<br></br>
              game genres
            </div>
          </div>
        </div>

        <div className="contribution">
          <h3>Our Contribution</h3>
          <div className="content">
            <p>
              Our core offering extends beyond mere profit generation; we
              emphasize the growth and active involvement of our user<br></br>
              community. Collaborating with us represents an investment, rather
              than a mere expenditure. Our dedication to providing <br></br>
              distinctive digital interactions guarantees unparalleled benefits
              for our clientele.
            </p>
          </div>
        </div>

        <div className="text-container">
          <div className="text-line">
            <h2>5M</h2>
            <p>
              Daily User<br></br>
              Engagement
            </p>
          </div>
          <div className="text-line">
            <h2>$500K</h2>
            <p>
              {" "}
              Revenue Surge for an <br></br>
              Platform
            </p>
          </div>
          <div className="text-line">
            <h2>10X</h2>
            <p>
              ROAS on all our <br></br>
              marketing campaigns
            </p>
          </div>
        </div>

        <div className="container">
          <div className="interested">
            <h4>Interested in delving deeper into the project?</h4>
            <div className="content">
              <p>
                If you'd like to explore further details about our initiatives
                or any of our <br></br>affiliated brands, don't hesitate to
                connect. You can reach out to us via<br></br>
                email at hello@abc.com or give us a call at +91 480 20802730.
              </p>
            </div>
            <div className="contact">
              <a href="#" className="skype-button">
                Ring us on Skype
              </a>
              <a href="#" className="contact-button">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
