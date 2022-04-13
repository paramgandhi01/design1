import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upper">
        <div className="start">
          <h2>E-shopper</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipisicing elit,sed
            <br /> do eiusmod tempor
          </p>
        </div>
        <div className="mid">
          <div className="m-flex">
            <div className="img4">
              <div className="img4i"></div>
            </div>
            <div className="img5">
              {" "}
              <div className="img5i"></div>
            </div>
            <div className="img6">
              {" "}
              <div className="img6i"></div>
            </div>
            <div className="img7">
              {" "}
              <div className="img7i"></div>
            </div>
          </div>
          <div className="md-flex">
            <div className="ct">
              <p>Circle of Hands</p>
              <p>24 DEC 2014</p>
            </div>
            <div className="ct">
              <p>Circle of Hands</p>
              <p>24 DEC 2014</p>
            </div>
            <div className="ct">
              <p>Circle of Hands</p>
              <p>24 DEC 2014</p>
            </div>
            <div className="ct">
              <p>Circle of Hands</p>
              <p>24 DEC 2014</p>
            </div>
          </div>
        </div>
        <div className="finish">
          <p>
            505 S Atlantic Ave Virginia Beach,
            <br /> VA(Virginia)
          </p>
        </div>
      </div>
      <hr className="fhr" />
      <div className="lower">
        <div className="ll">
          <div className="service">
            <h3>SERVICE</h3>
            <ul>
              <li>Online Help</li>
              <li>Contact Us</li>
              <li>Order Status</li>
              <li>Change Location</li>
              <li>FAQ’s</li>
            </ul>
          </div>
          <div className="shop">
            <h3>QUOCK SHOP</h3>
            <ul>
              <li>T-Shirt</li>
              <li>Mens</li>
              <li>Womens</li>
              <li>Gift Cards</li>
              <li>Shoes</li>
            </ul>
          </div>
          <div className="policy">
            <h3>POLICIES</h3>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Billing System</li>
              <li>Ticket System</li>
            </ul>
          </div>
          <div className="about">
            <h3>ABOUT SHOPPER</h3>
            <ul>
              <li>Company Information</li>
              <li>Careers</li>
              <li>Store Location</li>
              <li>Affillate Program</li>
              <li>Copyright</li>
            </ul>
          </div>
        </div>
        <div className="lr">
          <div className="email">
            <h3>ABOUT SHOPPER</h3>
            <div className="lrf">
              <div className="lri">
                <input type="email" placeholder="your email address"></input>
              </div>
              <div className="lrd"><i class="fa fa-arrow-right"></i></div>
            </div>
            <p>
              Get the most recent updates from <br />
              our site and be updated your self...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
