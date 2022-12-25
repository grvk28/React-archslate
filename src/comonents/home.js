import React from "react";
import './common.css'
import Navbar from "./navbar";
import Top from "./top";
import MiddleA from "./middleA";
import MiddleB from "./middleB";
import TopA from "./top";
import aa from '../icons/back.png'


function Home(){
    return(
        <div className="full">
            <Navbar/>
            <div className="body">
                <div style={{marginTop:'1%',display:'flex',flexDirection:'row'}}><img style={{height:'10%',width:'3%',marginTop:'1.5%'}} src={aa}/><h3 style={{marginLeft:'1%'}}>Back to jobs</h3></div>
                <TopA/>
                <MiddleA/>
                <MiddleB/>

            </div>
        </div>
    )
}

export default Home;