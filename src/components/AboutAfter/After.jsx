import React from 'react'
import minch from '../../assets/minch.jpg'
import './After.css'
export default function After() {
  return (
    <section id="abtAfter">
        <div className="abt_container">
            <div className="leftBox">
                <div className="content-box">
                    <h2>bespoke suits & dress making professionals</h2>
                    <p className="title">hight quality</p>
                    <p className="desc">At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti cupiditate non provident, similique sunt in culpa...</p>
                    <div className="abt_btn">explore</div>
                </div>
            </div>
            <div className="rightBox">
                <img src={minch} alt="minch image" />
            </div>
        </div>
    </section>
  )
}
