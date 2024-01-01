import React, { useEffect } from 'react'
import './HomeSection.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
export default function HomeSection() {
  
     
  const brand = "mohair";
  const sliderImages = [
    {
      image:require("../../assets/bg1.jpg"),
      title:"Mohair has over 40 years of experience",
      para:"We Provide Best Tailoring Services in the entire region"
    },
    {
      image:require("../../assets/shawcase.jpg"),
      title:"Premium Couter team high end suits and clothing",
      para:"lorem Ips lorem Ips nulla et Lorem Ips null et Lorem Ips"
    },
    {
      image:require("../../assets/bg2.jpg"),
      title:"Premium Couter team high end suits and clothing",
      para:"lorem Ips lorem Ips nulla et Lorem Ips null et Lorem Ips"
    },
  ]
 

  return (
    <section id="home">
      <div className="home_nav" id='hnav'>
        <div className="home_nav-container">
          <div className="upper">
            <div className="mail">
              Email:-info@gmail.com
            </div>
            <div className="logo">
              {brand}
            </div>
            <div className="mobile">
              Call Us:-9131861006
            </div>
          </div>
        </div>  
        <div className="line"></div>
        <div className="home_nav-container">
            <ul className="menu">
              {
                ["home","about","service","our work","blog"].map((item)=>(
                  <li>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))
              }
            </ul>
        </div>  
      </div>


      {/* ======================== */}

      <div class="slidesContainer">
            {
              sliderImages.map((item,ind)=>(
                <Slides key={ind} image={item}/>
              ))
            }
      </div>

      <FaAngleLeft className='leftArrow'/>
      <FaAngleRight className='rightArrow'/>
      
    </section>
  )
}


const Slides = ({image}) =>{
      return(
        <div className='slides'>
          <img src={image.image} alt="" />
            <div className="slide_center">
               <div className="slide_header">
                  {image.title}
               </div>
               <div className="slide_para">
                    {image.para}
               </div>
               <div className="slide_btn">
                  discover
               </div>
            </div>
        </div>
      )
}
