import "./Brands.css";
import React from "react";

export default function Brands() {
  return (
    <div className="brands">
      <div className="b-left">
        <div className="b-list">
          <ul>
            <li>
              ACNE<span>(56)</span>
            </li>
            <li>
              GRUNE ERDE<span>(57)</span>
            </li>
            <li>
              ALBIRO<span>(27)</span>
            </li>
            <li>
              RONHILL<span>(32)</span>
            </li>
            <li>
              ODDMOLLY<span>(5)</span>
            </li>
            <li>
              BOUDESTIJN<span>(9)</span>
            </li>
            <li>
              ROSCH CREATIVE CULTURE <span>(4)</span>
            </li>
          </ul>
        </div>
        {/* <div className='b-number'>
                <ul>
                        <li>(56)</li>
                        <li>(57)</li>
                        <li>(27)</li>
                        <li>(32)</li>
                        <li>(5)</li>
                        <li>(9)</li>
                        <li>(4)</li>
                    </ul>
                </div> */}
      </div>
      <div className="b-right">
        <div className="br-nav">
          <ul className="nav-f">
            <li>T-SHIRT</li>
            <li>BLAZERS</li>
            <li>SUNGLASS</li>
            <li>KIDS</li>
            <li>POLO SHIRT</li>
          </ul>
        </div>
        <div className="br-products">
          <div className="brp1">
            <div className="brpi1"></div>
            <div className="brtext">
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <button className="brbtn">
                <i class="fa fa-shopping-cart"></i>Add to cart
              </button>
            </div>
          </div>
          <div className="brp2">
            <div className="brpi2"></div>
            <div className="brtext">
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <button className="brbtn">
                <i class="fa fa-shopping-cart"></i>Add to cart
              </button>
            </div>
          </div>
          <div className="brp3">
            <div className="brpi3"></div>
            <div className="brtext">
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <button className="brbtn">
                <i class="fa fa-shopping-cart"></i>Add to cart
              </button>
            </div>
          </div>
          <div className="brp4">
            <div className="brpi4"></div>
            <div className="brtext">
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <button className="brbtn">
                <i class="fa fa-shopping-cart"></i>Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
