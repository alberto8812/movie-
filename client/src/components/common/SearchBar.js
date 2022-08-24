import React, { useEffect, useState } from 'react'
import { useDispatch} from "react-redux";
import { sebarchBar_path } from '../../const/const';
import { getCharactersByName,getEraseCharacter} from '../../redux/actions';
import  '../../styles/home.css'

const SearchBar = () => {
    const dispatch=useDispatch()
    const [name, setName] = useState("")

    const handleChangue=(e)=>{
     e.preventDefault();
     setName(e.target.value)
    }

    const handleSumit=(e)=>{
        e.preventDefault();
        dispatch(getCharactersByName(name))
        dispatch(getEraseCharacter({load:true,ident:false}))
    }

  return (
    <div className='searchBar_main_s'>
        <div className='searchBar_contaniner'>
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g>
        <path d={sebarchBar_path}></path></g></svg>

        <input
        className='searchBar_input'
        type='text'
        placeholder='Serch video game..... '
        onChange={(e=>handleChangue(e))}
        />
        </div>
        <div className='header_start_proyect_botton'>
        <button type='sutmit' onClick={(e)=>handleSumit(e)} className='header_start_button' >
            <span className='header_start_span'>Search</span>
            </button>
        </div>
    </div>
  )
}

export default SearchBar