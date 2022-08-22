import React, { memo } from 'react'
import { Link } from "react-router-dom";
import '../../styles/cards.css'



const Cards = ({name,image,rating,id,genres}) => {
  return (
    <div  className='Card_container'>

        <Link to={`/home/${id}`} style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}}>
      <div className='Card_info'>
      <div className="card_avatar">
      <img src={image} alt="img not found"  className="card_avatar" />
      </div>
      <div className='card_name'><h5>{name}</h5></div>
      <div className='card_rating'>
        <h4>rating: </h4>
        <h5>{rating}</h5></div>
      </div>
      <div className="card_plaform">
        {genres.map(res=>{
          return(
            <div className="card_plaform__item" >
              <h5><p>{res}</p></h5>
            </div>
          )
        })}
        </div>    
        </Link>
    </div>
  )
}


export default Cards
