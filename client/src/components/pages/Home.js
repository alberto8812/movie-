import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getGenres,getTopGame } from '../../redux/actions';
import  Cards  from '../common/Cards'; 
import  '../../styles/home.css'
import Paginate from '../common/Paginate';
import NavBar from '../common/NavBar';
import SearchBar from '../common/SearchBar';
import Loaders from '../common/Loaders';
import Aside from '../common/Aside';
import Footer from '../common/Footer';
import Error500 from '../common/Error500';


const Home = () => {

        const  getAllCharacters=useSelector((state)=>state.characters);
        const {error}=useSelector((state)=>state)

        const dispatch = useDispatch();
        const [orderCharter, setOrderCharter] = useState('')
        const [currentPage, setCurrentPage] = useState(1);
        const [characteByPage, setCharacteByPage] = useState(15)
        const lastCard=currentPage * characteByPage;//3*15//45
        const indexFirtCard=lastCard - characteByPage;//45-15//30
        const currentCards=getAllCharacters.slice(indexFirtCard,lastCard);

      const pagine=(numberPagine,)=>{
       
          setCurrentPage(numberPagine)
      }


        useEffect(() => {
      
          dispatch(getCharacters());
          dispatch(getGenres());    
        },[])


        useEffect(() => {
          dispatch(getTopGame())
          
        }, [getAllCharacters])
        

        


  return (
    <div  className='main_home_container'>
  {console.log(getAllCharacters)}
    <header className='home_header'>
       <h1>Bethesda Games Studios Word</h1>
       
       <div className='searchbar_main'>
        <SearchBar/>
       </div>

       <div>
        <NavBar setCurrentPage={setCurrentPage}  setOrderCharter={setOrderCharter}/>
       </div>

      </header>
     
      <aside className='home_aside'>
      <Aside/>
      </aside>

      <body className='home_body'>
        
      <div className='container_pagination'>
     
        <Paginate characteByPage={characteByPage} 
        pagine={pagine} 
        getAllCharacters={getAllCharacters.length} 
        currentPage={currentPage}

        />
    
        </div>
      

      <div className='container_cards'>
     
       
       {currentCards.length>0?currentCards.map(res=>{
        
      
          return(<div className='container_oneCard' key={res.id}>{
            <Cards 
            name={res.name} 
            image={res.image} 
            rating={res.rating} 
            id={res.id} 
            genres={res.genres}
            />
            
            }
          </div>)
       }):error?<Error500/>:<div className='loader'><Loaders/></div>}
       </div>

    
   
      </body>

  

      
      <footer className='home_footer'>
        <Footer/>
      </footer>
     
       
    </div>
  )
}

export default Home;