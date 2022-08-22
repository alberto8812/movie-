import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/cards.css'


export const Cards = ({name,image,rating,id}) => {
  return (
    <div  className='Card_container'>

        <Link to={`/home/${id}`} style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}}>
      <div className='Card_info'>
      <div className="card_avatar">
      <img src={image} alt="img not found"  className="card_avatar" />
      </div>
      <div className='card_name'><h5>{name}</h5></div>
      <div className='card_rating'><h5>{rating}</h5></div>
      </div>
      <ul className="card_plaform">
        <li className="card_plaform__item">
         <h4><p>nmap</p></h4>
        </li>
        <li className="card_plaform__item">
         <h4><p>nmap</p> </h4>
        </li>
        <li className="card_plaform__item">
         <h4><p>nmap</p> </h4>
        </li>
        </ul>    
        </Link>
    </div>
  )
}
