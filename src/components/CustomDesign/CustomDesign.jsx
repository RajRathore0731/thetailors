import React from 'react'
import './CustomDesign.css'
import backImage from '../../assets/bg2.jpg'
import small from '../../assets/small.png'
import showCase from '../../assets/shawcase.jpg'
export default function CustomDesign() {
  const values = [
    {title:"main",image:small,percent:"60%"},
    {title:"main",image:small,percent:"60%"},
    {title:"main",image:small,percent:"60%"},
    {title:"main",image:small,percent:"60%"}]
  return (
    <section id="custom">
      <img class="back_img" src={backImage} alt="" />
      <div className="custom_full">
        <div className="custom_container">
          <div className="custom_left">
            <div className="custom_head">
              Our Work And Number Speaks
              more than anything.
            </div>
            <div className="custom_title">
              fashion & designing experts
            </div>
            <p className="custom_para">
              We have been in the industry for more than a 20 years and our work has been the most prominent factor in growing our business. Our Customers have loved our brand and services.
            </p>
          </div>
          <div className="custom_right">
              {
                values.map((val)=>(
                  <ValBox percent={val.percent} imag={val.image} title={val.title}/>
                ))
              }
          </div>

        </div>
      </div>


      <div className="custom_blank">

      </div>


      <div className="custom_full">
        <div className="custom_container">
          <div className="custom_right">
            <div className="showImage">
              <img src={showCase} alt="" />
            </div>
          </div>     
          <div className="custom_left">
              <div className="custom_head">
                Become your own stylist & designer
              </div>
              <div className="custom_title">
                live your imagination
              </div>
              <p className="custom_para">
                Our Fashion experts will help you directly with your imagination and choice. we provide you the best consultancy from our fashion experts.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}



const ValBox = ({title,imag,percent}) =>(
  <div className="custom_values">
    <div className="custom_value_title">
      <div className="title_first">{title}</div>
      <div className="title_sec">{percent}</div>
    </div>
    <img src={imag} alt=""/> 
  </div>
)