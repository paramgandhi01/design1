import React from "react";
import "./Category.css";

export default function Category() {
  return (
    <div className="catg">
      <div className="f">
        <div className="category">
          <hr className="catghr" />
          <h4>CATEGORY</h4>
          <hr className="catghr" />
        </div>
        <div className="featured">
          <hr className="feathr" />
          <h4>FEATURED ITEMS</h4>
          <hr className="feathr" />
        </div>
      </div>
      <div className="lists">
        <div className="left">
          <div className="up">
            <ul>
              <li>SPORTSWEAR</li>
              <li>MENS</li>
              <li>WOMENS</li>
              <li>KIDS</li>
              <li>FASHION</li>
              <li>HOUSEHOLDS</li>
              <li>INTERIORS</li>
              <li>CLOTHING</li>
              <li>BAGS</li>
              <li>SHOES</li>
            </ul>
          </div>
          <div className="down">
            <hr className="dhr" />
            <h4>Brands</h4>
            <hr className="dhr" />
          </div>
        </div>
        <div className="right">
          <div className="r-up">
            <div className="first">
              <div className="img1"></div>
              <div className="text">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button className="btn">
                  <i class="fa fa-shopping-cart"></i>Add to cart
                </button>
              </div>
            </div>
            <div className="second">
              <div className="img2"></div>
              <div className="text">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button className="btn">
                  <i class="fa fa-shopping-cart"></i>Add to cart
                </button>
              </div>
            </div>
            <div className="third">
              <div className="img3"></div>
              <div className="text">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button className="btn">
                  <i class="fa fa-shopping-cart"></i>Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="r-down">
            <div className="dfirst">
              <div className="dfirst1">
                <p>
                  <i class="fa fa-plus-square"></i>Add to wishlist
                </p>
              </div>
              <div className="dfirst2">
                <p>
                  <i class="fa fa-plus-square"></i>Add to compare
                </p>
              </div>
            </div>
            <div className="dsecond">
            <div className="dfirst1">
                <p>
                  <i class="fa fa-plus-square"></i>Add to wishlist
                </p>
              </div>
              <div className="dfirst2">
                <p>
                  <i class="fa fa-plus-square"></i>Add to compare
                </p>
              </div>
            </div>
            <div className="dthird">
            <div className="dfirst1">
                <p>
                  <i class="fa fa-plus-square"></i>Add to wishlist
                </p>
              </div>
              <div className="dfirst2">
                <p>
                  <i class="fa fa-plus-square"></i>Add to compare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
