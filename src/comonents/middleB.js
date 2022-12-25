import React from "react";
import './middleA.css'
import Button from "./button";
import ButtonC from "./button/buttonc";
import aa from '../icons/star.png'
import ab from '../icons/share.jpg'
import ac from '../icons/man.png'

function MiddleB(){
    let p={name:'Message',style:{color:'white',backgroundColor:'black',height:'20%'},style1:{color:'black',backgroundColor:'black',height:'20%'}}
    return(
        <div className="midB">
            <div className="bottom">
                <div className="head">About this role</div>
                <div className="normal">
                    <div>
                    Short overview about job and the way that the candidate would fit into the company.
                    </div>
                    <div>Can also include extra instrutions for the application process if any exist.</div>
                
                    </div>
                
                <div className="head">Responsibilities</div>
                <div className="bullet">
                    <li>specific day to day task</li>
                    <li>delieverables</li>
                    <li>work environment requirements</li>
                    <li>role within the current team</li>
                    <li>etc.</li>
                </div>
                <div className="head">Skills</div>
                <div className="bullet">
                    <li>software skills</li>
                    <li>technical skills</li>
                    <li>soft skills</li>
                    <li>other</li>
                </div>
                <div className="head">Qualifications</div>
                <div className="normal">Required</div>
                <div className="bullet">
                    <li>education</li>
                    <li>licenses and certifications</li>
                    <li>experience needed</li>
                </div>
                <div className="normal">Bonus</div>
                <div className="bullet">
                    <li>education</li>
                    <li>licenses and certifications</li>
                    <li>experience needed</li>
                </div>
                <div className="head">Rate</div>
                <div className="bullet">
                    <li>specific day to day task</li>
                </div>
                <div className="head">Time Estimate</div>
                <div className="bullet">
                    <li>specific day to day task</li>
                </div>
                <div className="head">Work Autoriation</div>
                <div className="bullet">
                    <li>specific day to day task</li>
                </div>
                <div className="head">About Company</div>
                <div className="normal">
                <div>Description of company with any uniform info or desclaimers - equal hiring</div>
                <div className="">opprtunity, etc.</div>
                </div>
                <div className="abc">
                    <div className="first">
                        <div className="hi"></div>
                        <div className="orange">
                            <div>Apply on Archslate</div>
                        </div>
                        <div className="he"></div>
                    </div>
                    <div className="sec" >
                        <div className="him"><img style={{width:'110%',marginTop:'70%',marginLeft:'15%',zIndex:'3'}} src={aa}></img></div>
                        <div className="black">
                            <div></div>
                            <div style={{marginLeft:'15%',zIndex:'2'}}>Save</div></div>
                        <div className="her"></div>
                    </div>
                    <div className="third">
                        <div className="him">.....</div>
                        <div className="black">
                            <div></div>
                            <div style={{display:'flex',flexDirection:'row',gap:'5%'}}><img src={ab} style={{width:'12%'}}/><div>Share & Refer</div></div>
                        </div>
                        <div className="her">.....</div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="botA">
                    <div style={{fontWeight:'bold'}}>Job Poster</div>
                </div>
                <div className="details" style={{display:'flex',flexDirection:'row',marginTop:'8%'}}>
                    <div>
                        <img src={ac} />
                    </div>
                    <div style={{marginLeft:'7%',marginTop:'3%'}}>
                        <div style={{fontSize:'120%',fontWeight:'lighter',  display:'flex', flexDirection:'row',gap:'2%'}}><div>John</div><div>Carlos</div></div>
                        <div style={{fontWeight:'bold',fontSize:'75%',  display:'flex', flexDirection:'row',gap:'2%'}}><div>Project</div> <div>Manager</div></div>
                    </div>

                </div>
                <ButtonC {...p}></ButtonC>
            </div>

        </div>
    )
}

export default MiddleB