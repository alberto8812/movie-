///peticioes al servidor 
import axios from "axios";



// bring all character videogame action getCharacters
export const AXIOSCHARACS=async()=>(await  axios.get(`http://localhost:3001/videogames`)).data

export const AXIOSGENRES=async()=>(await  axios.get(`http://localhost:3001/genres`)).data

export const AXIOSCREATECHARACTER= `http://localhost:3001/videogames/create`

export const AXIOSByName=async(name)=>(await  axios.get(`http://localhost:3001/videogames?name=${name}`)).data

export const AXIOSDetail=async(id)=>(await  axios.get(`http://localhost:3001/videogames/${id}`)).data
