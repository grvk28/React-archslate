import React from "react";
import './bottom.css'
import aa from '../icons/thunder1.jpg'

function Bottom(){
    return(
                <div className="inside" style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10px',marginTop:'-35%',justifyContent: 'center'}} >
                    <div style={{display:'flex',flexDirection:'row', flexWrap:'nowrap',gap:'10px'}}>
                    <div className='phla' >
                        <div className="archl" ><img style={{width:'80%',marginTop:'30%',marginLeft:'20%'}} src={aa}/></div>
                        <div className="arch1" ><div>Rhino</div></div>
                        <div className="archr">.....</div>
                    </div>
                    
                    <div className='dusra' >
                        <div className="archl">.....</div>
                        <div className="arch1" >
                        <div>Sketchup</div>
                        </div>
                        <div className="archr">.....</div>
                    </div>
                    </div>
                    <div className='tisra' >
                        <div className="archl" style={{borderRadius:'40px 0 0 40px'}}>.....</div>
                        <div className="arch1" >
                        <div>Vectorworks</div>
                        </div>
                        <div className="archr">.....</div>
                    </div>
                </div>
    )
}

export default Bottom;