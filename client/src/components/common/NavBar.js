import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { filterGenres, getCharacters,getOrderCharacters,getVideogameCreate,getOrderRatingCharacters,getEraseCharacter } from '../../redux/actions/index'
import { CREATE } from "../../routers/path";

import '../../styles/NavBar.css'


const NavBar = ({setOrderCharter,setCurrentPage}) => {
const getAllGenres=useSelector((state)=>state.genres)
const getAllcharacter=useSelector((state)=>state.characters)
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEraseCharacter({load:true,ident:true}));
  }, [])
  

   const handleOnclick=(e)=>{
      e.preventDefault();
      dispatch(getCharacters())
    }


    const handleFilterGenres=(e)=>{
      dispatch(filterGenres(e.target.value));
      setCurrentPage(1)
    }

    const handleFilterCreate=(e)=>{
      dispatch(getVideogameCreate(e.target.value));
      setCurrentPage(1)
    }


    
  const handleOrderCharacter=(e)=>{
      dispatch(getOrderCharacters(e.target.value));
      setOrderCharter(e.target.value)
      setCurrentPage(1)
    }

    const handleRatingCharacter=(e)=>{
      dispatch(getOrderRatingCharacters(e.target.value));
      setOrderCharter(e.target.value)
      setCurrentPage(1)
    }



  return (
    <div className='main_searchbar'>



        <div className='main_searchbar_selector'>
        <label>Order:</label>
        <select className='main_selector'  onClick={(e=>handleOrderCharacter(e))} >
           <option value={'-->'} className='main_option_select' >{'...'}</option>
           <option value='Ascendente' >Ascending</option>
           <option value='desendente' >Descending</option>
        </select>
        </div>

        <div className='main_searchbar_selector'>
         <label>Genres</label>
        <select className='main_selector'  onClick={(e=>handleFilterGenres(e))}>
        <option value={'-->'} className='main_option_select' >{'...'}</option>
         {getAllGenres.length>1 && getAllGenres.map(res=>{
            return(<option value={res.name} key={res.id} className='main_option_select' >{res.name}</option>)
         })}
          
        </select>
        </div>

        <div className='main_searchbar_selector'>
        <label>Source</label>
        <select className='main_selector' onClick={e=>handleFilterCreate(e)}>
        <option  value={'-->'} className='main_option_select'>{'...'}</option>
        <option value={'Created'} className='main_option_select'>{'Created'}</option>
        <option  value={'Api'}  className='main_option_select'>{'Api'} </option>
        </select>
        </div>

        <div className='main_searchbar_selector'>
        <label>Rating</label>
        <select className='main_selector' onClick={e=>handleRatingCharacter(e)} >
        <option  value={'-->'} className='main_option_select'>{'...'}</option>
        <option value={'highes'} className='main_option_select'>{'highest to lowest'}</option>
        <option value={'lowest'} className='main_option_select'>{'lowest to highest'}</option>
        </select>
        </div>

        <div className='header_start_proyect_botton'>
       <button onClick={(e)=>handleOnclick(e)} className='header_start_button' >
       <span className='header_start_span'>Reload page</span>
        </button>
       </div>

     <div className='main_create'>
            <span><Link to={CREATE} style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}}>Create videogame</Link></span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
       </div>
        
    </div>
  )
}

export default NavBar