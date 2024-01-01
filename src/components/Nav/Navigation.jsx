import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { HiOutlineX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

export default function Navigation() {
  const brand = "Mohair";
  const [val,setVal] = useState(0);
  const listItem = ["home","about","service","our work","blog"]
  return (
    <>
      <nav id="scrollNav">
        <div className="nav_container">
          <div className="nav_logo">{brand}</div>
          <ul className="nav_menu">
              {
                listItem.map((item)=>(
                  <li><a href={`#${item}`} >{item}</a></li>
                ))
              }
          </ul>
          <div className="nav_info">
              info
          </div>
        </div>
      </nav>
    </>
  )
}
