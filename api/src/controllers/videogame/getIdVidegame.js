require('dotenv').config();
const {DB_KEY} = process.env;
const {conn}=require("../../db")
const {Videogame,Genres,Platforms}=conn.models
const axios=require("axios");



const getIdvideogame=async (req,res)=>{
    let {id}=req.params
  
    try {
          if(id.includes("-")){
              let deatailVideogameDb=await Videogame.findOne({
                  where:{id},
                  include:[{
                  model:Genres,
                  attributes:['name'],},{
                    model:Platforms,
                  attributes:['name']
                  }] 
                
                })
          
              
              let deatailVideogameDbE= {
                  name:deatailVideogameDb.name,
                  id:deatailVideogameDb.id,
                  description:deatailVideogameDb.Description,
                  rating:deatailVideogameDb.rating,
                  image:deatailVideogameDb.image,
                  platforms:deatailVideogameDb.platforms.map(res=>res.name),
                  genres:deatailVideogameDb.genres.map(res=>res.name),
                  released:deatailVideogameDb.released.split("-").reverse().join("-")
              }       
  
              res.status(202).json(deatailVideogameDbE)
          }else{
          let detailVideogameApi=(await axios.get(`https://api.rawg.io/api/games/${id}?key=${DB_KEY}`)).data;
     
         
   
              
          let deatailVideogameC = {
                  name:detailVideogameApi.name,
                  id:detailVideogameApi.id,
                  description:detailVideogameApi.description_raw,
                  rating:detailVideogameApi.rating,
                  image:detailVideogameApi.background_image,
                  platforms:detailVideogameApi.parent_platforms.map(res=>res.platform.name),
                  genres:detailVideogameApi.genres.map(res=>res.name),
                  released:detailVideogameApi.released.split("-").reverse().join("-")
              }
            
       
  
          res.status(202).json(deatailVideogameC)
  
            }
  
    } catch (error) {
      return res.status(402).json({msg:"The ID it didn't find try con other" + error})
    }
  }
  
  
  
  
  
  
  
  module.exports={
  
     getIdvideogame,
   
   
  }