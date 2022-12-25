import React from "react";
import './top.css'
import ab from '../icons/bkmn.png'
import ac from '../icons/share.png'
import ad from '../icons/pin.png'
import Button from "./button";
import ButtonB from "./button/buttonb";

function TopA(){
    let p={name:'Apply on Archslate',style:{color:'white',backgroundColor:'orangered',height:'55%'},style1:{color:'orangered',backgroundColor:'orangered',height:'55%'}}
    return(
        <div className="top">
            <div className="top-left">
                <div className="tl1">
                    <img style={{size:'200%'}} className="bkmn" src={ab}/>
                    <div className="tla">
                        <div style={{fontWeight:'bold',fontSize:'2.5vw',display:'flex',flexDirection:'row',gap:'2%'}}><div>Architectural</div> <div>Designer</div></div>
                        <div style={{fontSize:'1.5vw'}}>Black Mountain Architecture</div>
                        <div style={{fontWeight:'bold', fontSize:'1.2vw'}}>Posted 07/27/2022</div>
                    </div>
                </div>
                <div className="tl2" style={{height:'35px'}}>
                    <div className="tl2-ch">
                        <div className="left" style={{backgroundColor:'black',color:'black'}}>.....</div>
                        <div className="arch"><div style={{marginTop:'10%'}}>Architecture</div></div>
                        <div className="right" style={{backgroundColor:'black',color:'black'}}>.....</div>
                    </div>
                    <div className="tl2-ch">
                        <div className="left" style={{backgroundColor:'lightgreen',color:'lightgreen'}}>.....</div>
                        <div className="free"><div style={{marginTop:'12%'}}>Freelance</div></div>
                        <div className="right" style={{backgroundColor:'lightgreen',color:'lightgreen'}}>.....</div>
                    </div>
                    <div className="tl2-ch">
                        <div className="left">.....</div>
                        <div className="long"><div style={{marginTop:'10%'}}>Long-Term</div></div>
                        <div className="right">.....</div>
                    </div>
                </div>
            </div>
            
            <div className="top-right" >
                <div className="tra">
                    <img src={ac}/>
                    <img src={ad}/>
                </div>
               
                <div className="status">
                    <div>Status: Accepting Applications</div>
                </div>
                
                <ButtonB style={{width:'300px'}} {...p}/>
                
            </div>
        </div>
    )
}

export default TopA;