
require('dotenv').config();
const {DB_KEY} = process.env;
  
const {conn}=require("../db")
const {Videogame,Genres}=conn.models
const axios=require("axios");
let platform=[];


const getIpVideogame= async (req,res)=>{
    const {name} = req.query;
    
        try {
       
            let videoAllData=[],
            url=`https://api.rawg.io/api/games?key=${DB_KEY}`;
               
            for (let index = 0; index < 1; index++) {

                let urlVideogame=(await axios.get(url)).data;
                let VideogameData= await urlVideogame.results.map(res=>{

                return {
                    id:res.id,
                    name:res.name,
                    released:res.released,
                    image:res.background_image,
                    rating:res.rating,
                    genres:res.genres.map(res=>res.name),
                    platforms:res.parent_platforms.map(res=>res.platform.name)
                }
             })
                url=urlVideogame.next;
              
                videoAllData=videoAllData.concat(VideogameData)
           

             }
            //server data extratory
             let dbVideogames=await Videogame.findAll({include:{
                model:Genres,
                attributes:['name'],
                througth:{
                    genres:[]
                }

             }})
             
             let VideogameData2= await  dbVideogames.map(res=>{
         
                return{
                    id:res.id,
                    name:res.name,
                    released:res.released,
                    image:res.image,
                    rating:res.rating,
                    genres:res.genres.map(res=>res.name),
                    platforms:res.platforms.split(',')
                }
             })

            

   
             videoAllData=videoAllData.concat(VideogameData2)

         
        if(name){
            let videogameName=videoAllData.filter(res=>res.name.toLowerCase().includes(name.toLowerCase()));
       
            videogameName.length?
            res.status(200).json(videogameName)
            :res.status(404).json({msg:"The movie is no in the server try with other name"})
        }else{
            res.status(202).json(videoAllData)
        }
    

        } catch (error) {
            return res.status(402).json({msg:"the API present problem:" + error})
        }
        
}


const getIdvideogame=async (req,res)=>{
  let {id}=req.params

  try {
        if(id.includes("-")){
            let deatailVideogameDb=await Videogame.findOne({
                where:{id},
                include:{
                model:Genres,
                attributes:['name'],
                througth:{
                    attributes:[]}} })
        
            
            let deatailVideogameDbE= {
                name:deatailVideogameDb.name,
                id:deatailVideogameDb.id,
                description:deatailVideogameDb.Description,
                rating:deatailVideogameDb.rating,
                image:deatailVideogameDb.image,
                platforms:deatailVideogameDb.platforms.split(','),
                genres:deatailVideogameDb.genres.map(res=>res.name),
                released:deatailVideogameDb.released
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
                genres:detailVideogameApi.genres.map(res=>res.name)
            }
          
     

        res.status(202).json(deatailVideogameC)

          }

  } catch (error) {
    return res.status(402).json({msg:"The ID it didn't find try con other" + error})
  }
}


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
   
    let streingText= platforms.join(', ')
   rating= parseFloat(rating)
  

    const dbCreatevideoGame= await Videogame.create({
        name,
        Description,
        released,
        rating,
        platforms:streingText,
        image,
        createInDb
    })

    const dbCreateGenres=await Genres.findAll({
        where:{
            name:genres
        }
    })
    //console.log(dbCreateGenres)
    dbCreatevideoGame.addGenres(dbCreateGenres)
     res.status(202).send('character created successfully')

} catch (error) {
    console.log(error.message)
    res.status(404).send("stop with found a erro durenf the creation try again"+error)
}
   
}





module.exports={
   getIpVideogame,
   getIdvideogame,
   createVideogame,

}