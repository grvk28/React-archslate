import React from "react";
import './middleA.css';
import ab from '../icons/lightning-.gif'
import ac from '../icons/star.png'
import ad from '../icons/dollar.png'
import ae from '../icons/loc.png'
import Bottom from "./bottom";
import Button from "./button";

function MiddleA(){
    let p={name:'On-Site',style:{color:'black',backgroundColor:'lightpink',height:'50%'},style1:{color:'lightpink',backgroundColor:'lightpink',height:'50%'}}
    return(
        <div className="middleA">
            <div className="bot">
                <div className="botA">
                    <img className="himj" style={{width:'15%',height:'15%'}} src={ab}/>
                    <div style={{display:'flex',flexDirection:'row',gap:'5%',flexWrap:'nowrap' ,width:'70%'}}><div>Software</div> <div>Skills</div></div>
                </div>
                <Bottom/>
                
            </div>
            <div className="bot">
                <div className="botA">
                    <img  src={ac} style={{width:'12%',height:'12%'}} />
                    <div>Experience</div>
                </div>
                <div className="text">
                    Associate
                
                    3+years
                </div>
            </div>
            <div className="bot">
                <div className="botA">
                    <img style={{height:'15%'}} className="himj" src={ad}/>
                    <div style={{marginLeft:'22%'}}>Rate</div>
                </div>
                <div className="text" style={{marginTop:'-95%'}}>
                    $55-$65/hour
                </div>
            </div>
            <div className="bot">
                <div className="botA">
                    <img style={{width:'30%',height:'20%'}} src={ae}/>
                    <div style={{marginLeft:'12%'}}>Location</div>
                </div>
                <div className="text" style={{marginTop:'-25%'}}>
                    Bozeman, MT USA</div>
                    <div style={{marginLeft:'20%'}}><Button {...p}/></div>
                
            </div>
        </div>
    )
}

export default MiddleA