require('dotenv').config();
const {DB_KEY} = process.env;
const {conn}=require("../../db")
const {Platforms}=conn.models
const axios=require("axios")



const getAllPlatforms=async(req,res)=>{
     let url=`https://api.rawg.io/api/platforms?key=${DB_KEY}`
     
     //try {
        let  getApiPlatforms=(await axios.get(url)).data

        let getPlatforms= getApiPlatforms.results.map(res=>{

      
            return(res.name)
        })
        console.log(getPlatforms)
        getPlatforms.forEach(element => {
            Platforms.findOrCreate({
                where:{
                    name:element
                }
            })
        });

        const allPlatforms=await Platforms.findAll()

        res.status(202).json(allPlatforms)


   //  } catch (error) {
   //     res.status(404).send(error)
    // }
}

module.exports={
    getAllPlatforms
}