import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getCharacterDetail } from '../../redux/actions';
import '../../styles/detail.css'
import { HOME } from '../../routers/path';
import { iconPlatfomrs } from '../../const/const';
import Loaders from "../common/Loaders";


const Detail = props => {
    const {detail,detailB}=useSelector(state=>state)
    const dispatch=useDispatch()

    useEffect(() => {
      dispatch(getCharacterDetail(props.match.params.id))
    }, [dispatch])
    



  return (
    <div className='main_detail'>
     <div >
     <div className='form_back'>
            <span><Link to={HOME} style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}}>Back home page</Link></span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
       </div>
     </div>

    {(Object.keys(detail).length>1 && !detailB) ?
    <div className='main_detail_character'>
    
        <div className='main_character_especification'>

         <div className='main_character_especification_name'>
          <h2>{detail.name}</h2>
         </div>

         <div className='main_character_especification_img'>
          <img  src={detail.image} alt="img_video_game"/>
         </div>

         <div className='main_character_especification_description'>
          <p>{detail.description}</p>
         </div>
      </div>

      <div className='main_character_detail'>
         <div className='main_character_detail_title'>
          <h3 >Details</h3>
          </div>
         <div className='main_character_detail_genres'>
          <h3>Genres:</h3>
          <div className='main_detail_genres_icon'>
          {detail.genres.map(res=>{
            return(
            <div key={res}  className='main_detail_genres_exp'>
              <h3><b>{res}</b></h3>
            </div>)
          })}
       
          </div>   
         </div>

         <div className='main_character_detail_platforms'>
          <h3>Platforms:</h3>
          <div className='main_detail_genres_icon'>
          {detail.platforms.map(res=>{

           return  (
            <div key={res} className='main_detail_genres_plat'>
            <img src={iconPlatfomrs[res.split(" ").join("")]} alt={detail.name} className='genres_icon' style={{width:'50%'}}/>
            </div>
            )
          })}
          
          </div>   
         </div>

         <div className='main_character_detail_rating'>
          <h3>rating:</h3>
          <label>{detail.rating}</label>
         </div>

          <div>
            <h4>relised: </h4>
          <label >{detail.released}</label>
          </div>
         
         </div> 
         
         
      </div>:<div className='form_loader'><Loaders/></div>
    }
    </div>)

}



export default Detail