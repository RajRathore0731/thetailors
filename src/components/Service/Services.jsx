import React from 'react'
import './Service.css'
export default function Services() {
  const services = [{
    image:require('../../assets/ladiesB.jpg'),
    title:"Women Fashion",
    detail:"Tailoring & fashion Designing"
  },{
    image:require('../../assets/blazer.jpg'),
    title:"Men Fashion",
    detail:"Tailoring & fashion Designing"
  },{
    image:require('../../assets/ladiesB.jpg'),
    title:"Pickup & Drop",
    detail:"free delivery service"
  }]
  return (
    <section id="service">
        <div className="service_head">our services</div>
        <div className="service_container">
          {
            services.map((item)=>(
              <ServicePart image={item.image} title={item.title} detail={item.detail}/>
            ))
          }
        </div>
    </section>
  )
}

const ServicePart = ({image,title,detail})=>(
  <div className="services">
    <img src={image} alt="" />
    <div className='service_detail'>
      <h3>{title}</h3>
      <p className='para'>{detail}</p>
    </div>
  </div>
)