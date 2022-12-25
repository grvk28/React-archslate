import React from "react";
import './bottom.css'

function Button(props){
    console.log(props)
    let g=props.style
    let h=props.style1
    //g.style.color='green'
    console.log(g)
    return(
        <div style={{display:'flex',flexDirection:'row',height:'100%',fontWeight:'bold',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
            <div style={h} className='ll'>.....</div>
            <div style={g} className='mm'><div style={{marginTop:'15%'}}>{props.name}</div></div>
            <div style={h} className='rr'>.....</div>
        </div>
    )
}

export default Button;