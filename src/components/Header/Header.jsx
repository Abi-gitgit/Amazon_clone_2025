import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "../LowerHeader";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [{basket},dispatch ]= useContext(DataContext)
  const totalItem =basket?.reduce((amount,item)=>{
    return item.amount +amount
  },0)
  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        {/* logo section */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
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
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt="U.S. Flag for language selection"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
};

export default Header;


