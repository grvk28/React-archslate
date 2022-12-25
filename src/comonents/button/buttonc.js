import React from "react";
import '../bottom.css'
import as from '../../icons/msg.jpg'

function ButtonA(props){
    console.log(props)
    let g=props.style
    let h=props.style1
    //g.style.color='green'
    console.log(g)
    return(
        <div style={{display:'flex',flexDirection:'row',height:'100%',fontWeight:'bold',textAlign:'center',alignItems:'center',justifyContent:'center',width:'80%',marginTop:'-30%',marginLeft:'9%'}}>
            <div style={h} className='ll'>.....</div>
            <div style={g} className='mm'>
                <div style={{marginTop:'8%',display:'flex',flexDirection:'row',marginLeft:'0%'}}>
                <img style={{width:'25%',height:'35%',marginTop:'-5%',marginRight:'5%'}} src={as}/>
                <div>{props.name}</div>
                </div></div>
            <div style={h} className='rr'>.....</div>
        </div>
    )
}

export default ButtonA;