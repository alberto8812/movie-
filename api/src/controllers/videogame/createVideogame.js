
require('dotenv').config();
const {DB_KEY} = process.env;
const {conn}=require("../../db")
const {Videogame,Genres,Platforms}=conn.models
const axios=require("axios");


const createVideogame=async(req,res)=>{
    try {
        let {
            name,
            Description,
            released,
            rating,
            platforms,
            image,
            genres,
            createInDb
        }= req.body;
       

       rating= parseFloat(rating)
      
    
        const dbCreatevideoGame= await Videogame.create({
            name,
            Description,
            released,
            rating,
            image,
            createInDb
        })
    
        const dbCreateGenres=await Genres.findAll({
            where:{
                name:genres
            }
        })

        const dbCretetePlatforms=await Platforms.findAll({
            where:{
                name:platforms
            }
        })
        //console.log(dbCreateGenres)
        dbCreatevideoGame.addGenres(dbCreateGenres)
        dbCreatevideoGame.addPlatforms(dbCretetePlatforms)
         res.status(202).send('character created successfully')
    
    } catch (error) {
      
        res.status(404).send("stop with found a erro durenf the creation try again"+error)
    }
       
    }


    module.exports={createVideogame}