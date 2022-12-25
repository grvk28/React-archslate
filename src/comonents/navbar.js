import React from "react";

import ab from '../icons/archslate.png';
import ac from '../icons/stars.png';
import ad from '../icons/globe.png';
import ae from '../icons/suitcase.png';
import af from '../icons/message.png';
import ag from '../icons/user.gif';

function Navbar(){
    return(
        <div className="Navbody">
            <div className="Nav-left">
                <img className="left-img" src={ab}/>
                <h1 className="arc">Archslate</h1>
            </div>
            <div className="Nav-right">
                <div className="NavEl">
                <img className="pic" src={ac}/>
                <p>Candidates</p>
                </div>
                <div className="NavEl">
                <img className="pic" src={ad}/>
                <p>Companies</p>
                </div>
                <div className="NavEl">
                <img className="pic" src={ae}/>
                <p>Jobs</p>
                </div>
                <div className="NavEl">
                <img className="pic" src={af}/>
                <p>Noticifications</p>
                </div>
                <div className="NavEl">
                <img className="pic" src={ag}/>
                <p>Profile</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;