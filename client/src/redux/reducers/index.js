
import { GET_TOP_GAME,GET_LOADER,GET_CHARACTER_BY_ID,GET_CHARACTERS_BY_NAME,GET_PLATFORMS,POST_CREATE_CHARACTER,GET_CHARACTERS,GET_GENRES,GET_GENRES_FILTER,GET_ORDER_CHARACTERS,GET_VIDEOGAME_CREATE,GET_ORDER_RATING_CHARACTERS } from '../Variables';

const initialState = {
  characters:[],
  Allcharacters:[],
  genres:[],
  Platforms:[],
  detail:[],
  top:[],
  detailB:true

}

const rootReducer = (state = initialState, { type, payload }) => {

  switch (type) {


  case GET_CHARACTERS:

    return { ...state, characters:payload,Allcharacters:payload}
  
  case GET_GENRES:
       
      return { ...state, genres:payload}

  case GET_PLATFORMS:
     
      let AllPlatforms=state.Allcharacters;
      let concatAll=[];

      AllPlatforms= AllPlatforms.map(res=>{
        if(Array.isArray(res.platforms)){
          return res.platforms;
        }
        return []}) 

      for (const iterator of AllPlatforms) {
        if(iterator.length>=1){
          concatAll=concatAll.concat(iterator)
        }
      }
      
      concatAll=[...new Set(concatAll)]
  
     
      return { ...state,Platforms:concatAll}

  case GET_CHARACTER_BY_ID:

    return{...state,detail:payload,detailB:false}

  case  GET_CHARACTERS_BY_NAME:

    return{
      ...state,
      characters:payload,
      detailB:false
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
  
  default:
    return state
  }
}
export default rootReducer;

