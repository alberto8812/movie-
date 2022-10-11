require('dotenv').config();
const {DB_KEY} = process.env;
const {conn}=require("../../db")
const {Videogame,Genres,Platforms}=conn.models
const axios=require("axios");

const getAllVideogame= async (req,res)=>{
    const {name} = req.query;

        try {
       
            let videoAllData=[],
            url=`https://api.rawg.io/api/games?key=${DB_KEY}`;
               
            for (let index = 0; index < 5; index++) {

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

             let dbVideogames=await Videogame.findAll({include:[
                {
                model:Genres,
                attributes:['name']},
                {
                model:Platforms,
                attributes:['name']
                }
            ]
            },
          )

            let VideogameData2=  dbVideogames.map(res=>{
         
                return{
                   id:res.id,
                    name:res.name,
                    released:res.released,
                    image:res.image,
                    rating:res.rating,
                    genres:res.genres.map(res=>res.name),
                    platforms:res.platforms.map(res=>res.name),
                    createInDb:res.createInDb
                }
             })

            

  
             videoAllData=videoAllData.concat(VideogameData2)

         
        if(name){
            let videogameName=videoAllData.filter(res=>res.name.toLowerCase().includes(name.toLowerCase()));
       
            videogameName.length?
            res.status(200).json(videogameName)
            :res.status(202).json({msg:"The movie is no in the server try with other name"})
        }else{
            res.status(202).json(videoAllData)
        }
    

        } catch (error) {
            return res.status(402).json({msg:"the API present problem:" + error})
        }
        
}

module.exports={getAllVideogame}