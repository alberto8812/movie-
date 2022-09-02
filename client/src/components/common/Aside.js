import React from 'react'
import { iconPlatfomrs } from '../../const/const';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { IconContext } from 'react-icons/lib';
import { useDispatch } from "react-redux";
import { getFilterPlatform } from '../../redux/actions';


const Aside = () => {
    const  {top}=useSelector((state)=>state);
    const dispatch=useDispatch()


const handlePlatform=(e)=>{
  dispatch(getFilterPlatform(e))
}

  return (
    
    <div className='home_aside_1'> 

    <div className='aside_icom_patfrom'>
    <IconContext.Provider value={{size:"2em", color:'white',margin:"20px"}} > 
    {Object.keys(iconPlatfomrs).map(res=>{

      return(<div className='each_icon'  key={res}  onClick={()=>handlePlatform(res)}>
        {iconPlatfomrs[res]}
      </div>)
    })}
    </IconContext.Provider>
    </div>
  
    <div className='aside_top'>
    <h3>Top games: </h3>
      {top&&top.map((res,index)=>{
        return(<Link to={`/home/${res.id}`} style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}} key={index}><div className='aside_top_game' >
          <h5>{`${index +1}.${res.name}`}</h5>
   
        </div></Link>)
      })}

      </div>

</div>

  )
}


export default Aside