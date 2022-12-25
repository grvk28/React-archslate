import React from "react";
import '../bottom.css'
import as from '../../icons/email.png'

function ButtonA(props){
    console.log(props)
    let g=props.style
    let h=props.style1
    //g.style.color='green'
    console.log(g)
    return(
        <div style={{display:'flex',flexDirection:'row',height:'100%',fontWeight:'bold',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
            <div style={h} className='ll'>.....</div>
            <div style={g} className='mm'>
                <div style={{marginTop:'15%'}}>
                <img style={{width:'10%',height:'10%'}} src={as}/>
                {props.name}</div></div>
            <div style={h} className='rr'>.....</div>
        </div>
    )
}

export default ButtonA;