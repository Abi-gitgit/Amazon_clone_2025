
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from "./Header/Header.module.css"

const LowerHeader = () => {
  return (
    <nav className={classes.lower_container}>

  <ul>
        <li>
          <IoIosMenu />
          <p>All</p>
        </li>
        <li>Today's Deal</li>
        <li> Customer Service</li>
        <li> Registry</li>
        <li>Gift Card</li>
        <li> Sell</li>
      </ul>
      
      </nav>
  )
}

export default LowerHeader




