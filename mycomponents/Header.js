import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <div className="main">
      <div className="flex">
        <div className="logo">
          <img src="images/logo.png" alt="my1232" />
        </div>
        <div className="list1">
          <ul className="list">
            <li>
              <a>
                <i class="fa fa-user"></i>Account
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-star"></i>Wishlist
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-bullseye"></i>Checkout
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-shopping-cart"></i>Cart
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-lock"></i>Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="hhr" />
    </div>
  );
}
