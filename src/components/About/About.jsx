import React from 'react'
import './About.css'
import cutImage from '../../assets/Scissor.png'
import { FaRegDotCircle } from "react-icons/fa";
export default function About() {

  const imageData = [
    {
      image:require("../../assets/ladiesB.jpg"),
      title:"Custom Made",
      boxid:"first"
    },
    {
      image:require("../../assets/maniquine.jpg"),
      title:"Custom Tailored",
      boxid:"sec"
    },
    {
      image:require("../../assets/minch.jpg"),
      title:"Custom Measured",
      boxid:"third"
    },
    {
      image:require("../../assets/cutting.jpg"),
      title:"Precision cutting",
      boxid:"fourth"
    }]
  return (
    <>
      <section id="about">
          <div className="about_container">
                <div className="about_container-top_inner">
                    <div className="top_inner-head">
                      <div>Individuality of your design.</div>
                      <div>Create your style.</div>
                    </div>
                    <div className="top_inner-title">
                      high quality tailor
                    </div>
                </div>
                <div className="about_container-top_inner">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem non, magnam quos beatae cumque soluta animi sint dolor sapiente quis sed consequatur itaque, hic quod esse quia numquam odit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident alias possimus nesciunt veritatis ad. Amet accuectus.</p>
                </div>
            </div>

          <div className="cutLine">
            <img src={cutImage} alt="" />
          </div>
    
          <div className="about_container bottom">
              <div className="about_container-bottom">
                  {
                    imageData?.map((item,ind)=>(
                      <ImageBox image={item.image} title={item.title} boxid={item.boxid} key={ind}/>
                    ))
                  }
              </div>
              {/* <div className="radio-btn">
                  {
                    imageData?.map((item,ind)=>{
                      <FaRegDotCircle key={ind} id={item}/>
                    })
                  }
              </div> */}
          </div>
      </section>
    </>
  )
}

const ImageBox = ({image,title,boxid}) =>(
  <>
    <div id={boxid} className='about_container-bottom_image-box'>
      <img src={image} alt="" />
      <div className='image-content'>
          <div className='image-title'>
            {title}              
          </div>
          <div className="image-title_des">
            {title}
          </div>
      </div>
    </div>
  </>
)