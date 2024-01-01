import React from 'react'
import './TagLine.css'
export default function TagLine() {
    const tags = [{
        tag:"Indviduality of design",
    },{
        tag:"Get Your Customised Design",
    }
    ,{
        tag:"Consult with our Experts",
    },{
        tag:"Give life to your imagination",
    }
]
  return (
    <section id="tagLine">
        <div className="tag_container">
            <div className="innerTag">
                {
                    tags.map((item)=>(
                        <Line tag={item.tag}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

const Line = ({tag}) =>(
    <p className="paraLine">{tag}</p>
)