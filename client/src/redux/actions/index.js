
import axios from "axios";
import { AXIOSCHARACS, AXIOSCREATECHARACTER, AXIOSGENRES,AXIOSByName,AXIOSDetail,AXIOSPlatform } from "../utils/apiClient";
import {GET_TOP_GAME,GET_LOADER,GET_CHARACTER_BY_ID,GET_CHARACTERS_BY_NAME,GET_PLATFORMS,GET_CHARACTERS,GET_GENRES,GET_GENRES_FILTER,GET_ORDER_CHARACTERS,GET_VIDEOGAME_CREATE,GET_ORDER_RATING_CHARACTERS } from "../Variables";



export const getCharacters = () => {
  return async function (dispatch){
   let getCharactersData=await  AXIOSCHARACS()

    return dispatch({
        type:GET_CHARACTERS,
        payload:getCharactersData
    })
  
  }

}

export const getGenres=()=>{
  return async function (dispatch){
    let getGenresData=await  AXIOSGENRES()
 
     return dispatch({
         type:GET_GENRES,
         payload:getGenresData
     })

}
}


export const postCreateCharacter=(payload)=>{
  return async function (dispatch){
    let getGenresData=await  axios.post(AXIOSCREATECHARACTER,payload)

     return getGenresData

}
}

export const getCharactersByName=(name)=>{

   return async function (dispatch){
    let getCharacterByN= await AXIOSByName(name)
  return dispatch({
    type:GET_CHARACTERS_BY_NAME,
    payload: getCharacterByN
  })
}

}

export const getPlatforms=()=>{
  return async function(dispatch){
    let getPlatform=await AXIOSPlatform()

  return dispatch({
     type:GET_PLATFORMS,
     payload:getPlatform
  })
}
}


export const getVideogameCreate=(payload)=>{

     return {
         type:GET_VIDEOGAME_CREATE,
         payload:payload
     }

}

export const filterGenres=(payload)=>{

  return {
      type:GET_GENRES_FILTER,
      payload:payload
  }

}


export const getOrderCharacters=(payload)=>{
   return{
      type:GET_ORDER_CHARACTERS,
      payload:payload
   }
}

export const getOrderRatingCharacters=(payload)=>{
  return{
     type:GET_ORDER_RATING_CHARACTERS,
     payload:payload
  }
}



export const getCharacterDetail=(id)=>{
  return async function(dispatch){
    let characterDetail=await AXIOSDetail(id);
    return dispatch({
      type:GET_CHARACTER_BY_ID,
      payload:characterDetail
    })
  }


}


export  const getEraseCharacter=(payload)=>{
  return{
    type:GET_LOADER,
    payload:payload
 }
}


export const getTopGame=()=>{
  return{
    type:GET_TOP_GAME,
 }
}