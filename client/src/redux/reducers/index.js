
import { iconPlatfomrs } from '../../const/const';
import { GET_TOP_GAME,GET_LOADER,GET_CHARACTER_BY_ID,GET_CHARACTERS_BY_NAME,GET_PLATFORMS,POST_CREATE_CHARACTER,GET_CHARACTERS,GET_GENRES,GET_GENRES_FILTER,GET_ORDER_CHARACTERS,GET_VIDEOGAME_CREATE,GET_ORDER_RATING_CHARACTERS, GET_FILTER_PLATFORM } from '../Variables';
const initialState = {
  characters:[],
  Allcharacters:[],
  genres:[],
  Platforms:[],
  detail:[],
  top:[],
  detailB:true,
  error:{}


}

const rootReducer = (state = initialState, { type, payload }) => {

  switch (type) {


  case GET_CHARACTERS:


  

    return { ...state, characters:payload,Allcharacters:payload, error:{}}
  
  case GET_GENRES:
       
      return { ...state, genres:payload}

  case GET_PLATFORMS:
     
   

  
  

      return { ...state,Platforms:payload}

  case GET_CHARACTER_BY_ID:

     let platfomrApi=[...payload.platforms]
     let ObjectPlatform=Object.keys(iconPlatfomrs)
     let changeNamePlatform= platfomrApi.map(res=>{
      if(res==='3DO'){return "DO"}
      for(let i=0;i<= ObjectPlatform.length-1;i++){
         if(res.includes(ObjectPlatform[i])){
         
         
            return ( ObjectPlatform[i])
         }
      }
     })

     changeNamePlatform=changeNamePlatform.filter((res,index)=>{
       return changeNamePlatform.indexOf(res)===index
     })
    

    return{...state,detail:{...payload,platforms:changeNamePlatform},detailB:false, error:{}}

  case  GET_CHARACTERS_BY_NAME:

    return{
      ...state,
      characters:Object.keys(payload)[0]!=="msg"?payload:[...state.Allcharacters],
      detailB:false,
      error:Object.keys(payload)[0]==="msg"?payload:{}
    }


  case GET_GENRES_FILTER:
  
      const  AllcharactersGen=state.Allcharacters

      let  genresFilter=payload==='-->'? AllcharactersGen : AllcharactersGen.filter(res=>res.genres.includes(payload) );
      let  genresFilterdb= payload==='-->'?[]:AllcharactersGen.filter(res=>res.createInDb===true && res.genres.find(data=>data.name===payload));
      
       return {...state,characters:genresFilterdb.length>=1?genresFilter.concat(genresFilterdb):genresFilter}


  case POST_CREATE_CHARACTER:
      
    
        return { ...state,}
  
        case GET_VIDEOGAME_CREATE:
          let  AllcharactersCreate=state.Allcharacters
          let getVideoGameCreate=payload==='Created'?AllcharactersCreate.filter(res=>res.createInDb):AllcharactersCreate.filter(res=>!res.createInDb );
        
            return { ...state, characters:payload==='-->'?AllcharactersCreate:getVideoGameCreate}

  case GET_ORDER_CHARACTERS:

        let AllcharactersOrder= [...state.Allcharacters];
        let getOrderCharacters= payload==='desendente'?
            AllcharactersOrder.sort(function(a,b){

          if(a.name.toLowerCase()>b.name.toLowerCase()){
            return -1
          }
          if(a.name.toLowerCase()<b.name.toLowerCase()){
            return 1
          }
          return 0
        })
        :AllcharactersOrder.sort(function(a,b){
     
          if(a.name.toLowerCase()>b.name.toLowerCase()){
            return 1
          }
          if(a.name.toLowerCase()<b.name.toLowerCase()){
            return -1
          }
          return 0
        })


        return{...state,characters:payload==='-->'?state.Allcharacters:getOrderCharacters}

  case GET_ORDER_RATING_CHARACTERS:

    let AllcharactersOrderRating= [...state.Allcharacters];
    let getOrderRatingCharacters= payload==='highes'?
     AllcharactersOrderRating.sort(function(a,b){
  
        if(a.rating>b.rating){
         return -1
          }
        if(a.rating<b.rating){
          return 1
          }
        return 0
          })
        :AllcharactersOrderRating.sort(function(a,b){
       
        if(a.rating>b.rating){
            return 1
          }
        if(a.rating<b.rating){
             return -1
          }
          return 0
          })
  
  
        return{...state,characters:payload==='-->'?state.Allcharacters:getOrderRatingCharacters}
    
  case GET_LOADER:
    return {...state,detailB:payload.load,detail:[],characters:payload.ident?state.characters:[]}

  case GET_TOP_GAME:
    let topcharactersOrderRating= [...state.Allcharacters];
    topcharactersOrderRating.sort(function(a,b){
  
      if(a.rating>b.rating){
       return -1
        }
      if(a.rating<b.rating){
        return 1
        }
      return 0
        })
      
        topcharactersOrderRating=topcharactersOrderRating.splice(0,10)


    return {...state,top:topcharactersOrderRating}

    case GET_FILTER_PLATFORM:

      let  FilterPlatform=[...state.Allcharacters]
     let ObjectPlatform2=Object.keys(iconPlatfomrs)
     let changeNamePlatform2= FilterPlatform.map(res=>{
        return {...res,platforms:res.platforms.map(data=>{
          if(data==='3DO'){return "DO"}
         for(let i=0;i<= ObjectPlatform2.length-1;i++){
             if(data.includes(ObjectPlatform2[i])){ 
              return ( ObjectPlatform2[i])
             }
          }
        })
      }})


      //let  FilterPlatform=[...state.Allcharacters]
      changeNamePlatform2=changeNamePlatform2.filter(res=>res.platforms.includes(payload))
      console.log( payload)
      console.log( changeNamePlatform2)
      
    return {...state,characters:changeNamePlatform2}
  
  default:
    return state
  }
}
export default rootReducer;

