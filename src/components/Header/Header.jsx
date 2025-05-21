import React from "react";
// import classes from"./Header.module.css"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "../LowerHeader";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import "./Header.module.css";

const Header = () => {
  return (
    <>
      {/* <section> */}
        <div className={classes.header_container}>
          {/* logo section */}
          <div className={classes.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="U.S. Flag for language selection"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      {/* </section> */}
      <LowerHeader/>
    </>
  );
};

export default Header;


