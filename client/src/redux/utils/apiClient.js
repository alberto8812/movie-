///peticioes al servidor 
import axios from "axios";



// bring all character videogame action getCharacters
export const AXIOSCHARACS=async()=>(await  axios.get(`/videogames`)).data

export const AXIOSGENRES=async()=>(await  axios.get(`/genres`)).data

export const AXIOSCREATECHARACTER= `/videogames/create`

export const AXIOSByName=async(name)=>(await  axios.get(`/videogames?name=${name}`)).data

export const AXIOSDetail=async(id)=>(await  axios.get(`/videogames/${id}`)).data

export const AXIOSPlatform=async()=>(await  axios.get(`/platforms`)).data