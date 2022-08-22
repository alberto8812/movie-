require('dotenv').config();
const {DB_KEY} = process.env;
const {conn}=require("../db")
const {Genres}=conn.models
const axios=require("axios")




const getAllGeneros= async (req,res)=>{

    let url=`https://api.rawg.io/api/genres?key=${DB_KEY}`

    try {
        let getApiGenres= (await axios.get(url)).data
        let getCharactersGenres=getApiGenres.results.map(res=>{
            return {
                name:res.name,
                image:res.image_background
            }
        })
        getCharactersGenres.forEach(element => {
            Genres.findOrCreate(
                {where:{
                    name:element.name
                }
            })
        });

        const  allgeneros= await Genres.findAll()
        res.status(202).json(allgeneros)



    } catch (error) {
        res.status(404).json({msg:"the genres server present problem , try again leater: " + error})
    }
};




module.exports={
    getAllGeneros,
}