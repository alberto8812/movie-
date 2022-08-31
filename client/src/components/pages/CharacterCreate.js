import React, { useEffect } from 'react'
import {getGenres,getPlatforms} from "../../redux/actions/index";
import { useDispatch,useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { HOME } from '../../routers/path';
import'../../styles/form.css'
import { useGameForm } from '../../hooks/useGameForm';

const initialForm={
  name:"",
  released:"",
  rating:0,
  image:"",
  genres:{},
  platforms:{},
  Description:""

}


const validation=(initialValue)=>{
 let error={}

if(!initialValue.name){
  error.name="The name field is required"
}
if(!initialValue.Description){
  error.Description="The Description field is required"
}
if(Object.values(initialValue.genres).filter(res=>res!==null).length<1){
  error.genres="The genres field is required"
}
if(Object.values(initialValue.platforms).filter(res=>res!==null).length<1){
  error.platforms="The platforms field is required"
}


 return error
}

const  CharacterCreate=(props)=>{
    const {initialValue,errors,handleError, handleChangue,handleChangueCheckbox,handleSubmit}=useGameForm(initialForm,validation)
    const dispatch=useDispatch();
    const { genres,Platforms}=useSelector((state)=>state)

    useEffect(() => {
      dispatch(getGenres());
      dispatch(getPlatforms())
    }, [])


  return (

    <div className='container_form'> 

      <div className='form_back'>
            <span><Link to={HOME} style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}}>Back home page</Link></span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
       </div>

       { genres.length>0 && Platforms.length>0
       ?<form className='from_container' onSubmit={(e)=>handleSubmit(e)}>
                 <h1>Create new video game process</h1>
                 <div className='from_input_container' >

                 <div className='from_input_data'>
                   <label>name: </label>
                   <input
                     onBlur={handleError}
                     placeholder="name"
                     type='text'
                     value={initialValue.name}
                     name='name'
                     onChange={(e)=>handleChangue(e)}
                     required
                    />
                    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
                    </div>

                 <div className='from_input_data' >
                  <label>released: </label>
                  <input 
                    type='date'
                    onBlur={handleError}
                    value={initialValue.date}
                    name='released'
                    onChange={(e)=>handleChangue(e)}
                     />
                    </div>

                  <div className='from_input_data'>
                  <label>rating: </label>
                  <input 
                    onBlur={handleError}
                    type='number'
                    value={initialValue.rating}
                    min="1.0"
                    max="5"
                    step="any"
                    name='rating'
                    onChange={(e)=>handleChangue(e)}
                    />
                  </div>

                  <div className='from_input_data'>
                    <label>image: </label>
                    <input 
                    onBlur={handleError}
                    type='text'
                    value={initialValue.image}
                    name='image'
                    onChange={(e)=>handleChangue(e)}
                    />
                   </div>
                </div>
              
                <div className='from_continer_checkBox'>
               
                  <label className='from_checkBox_label_main'>genres: </label>
                  {errors.genres && <p style={{color:'red'}}>{errors.genres}</p>}
                    <div className='from_checkBox_icon' >
                      {genres.length>1 && genres.map(res=>{
                         return(<div className='from_checkBox_detail' key={res.name}>
                            <div className='grid_checkbox'>
                            <input
                              onBlur={handleError}
                              id={res.name}
                              className='from_checkBox_input'
                              name="genres"
                              type="checkbox"
                              value={res.name}
                              onChange={(e)=>handleChangueCheckbox(e)}/>
                              <label for={res.name} >{res.name}</label>
                            </div>
                         </div>)})}
                      </div>

                 
                  <label className='from_checkBox_label_main'>platforms: </label>
            
                    <div className='from_checkBox_icon'>
                      {Platforms.length>1 && Platforms.map(res=>{
                        return(<div className='from_checkBox_detail' key={res}>
                          <div className='grid_checkbox'>
                            <input
                              onBlur={handleError} 
                              id={res}
                              className='from_checkBox_input'
                              name="platforms"
                              type="checkbox"
                              value={res}
                              onChange={(e)=>handleChangueCheckbox(e)}/>
                              <label for={res}>{res} </label>
                          </div>
                        </div>)})}
                      </div>
                 </div>
                 
              <div className='from_description'>
                <label>Description: </label>
                  <textarea
                    onBlur={handleError}
                    type='text'
                    value={initialValue.Description}  
                    name='Description'
                    onChange={(e)=>handleChangue(e)}
                    />
                  {errors.Description && <p style={{color:'red'}}>{errors.Description}</p>}
                </div>
          
          <div className='header_start_proyect_botton'>
            <button className='header_start_button' type='submit'>
              <span className='header_start_span'>Create video game</span>
            </button>
          </div>



       </form>:<div>Cargando...</div>}



    </div>
  )
}



export default CharacterCreate
