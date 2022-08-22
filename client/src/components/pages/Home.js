import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getGenres,loader } from '../../redux/actions';
import { Link } from "react-router-dom";
import { Cards } from '../common/Cards'; 
import  '../../styles/home.css'
import Paginate from '../common/Paginate';
import NavBar from '../component/NavBar';
import SearchBar from '../common/SearchBar';
import Loaders from '../common/Loaders';





const Home = () => {
       
        const  getAllCharacters=useSelector((state)=>state.characters);
        const dispatch = useDispatch();
        const [orderCharter, setOrderCharter] = useState('')
        const [currentPage, setCurrentPage] = useState(1);
        const [characteByPage, setCharacteByPage] = useState(15)
        const lastCard=currentPage * characteByPage;
        const indexFirtCard=lastCard - characteByPage;
        const currentCards=getAllCharacters.slice(indexFirtCard,lastCard)


      const pagine=(numberPagine,)=>{
       
          setCurrentPage(numberPagine)
      }


        useEffect(() => {
      
          dispatch(getCharacters());
          dispatch(getGenres());    
        },[])
  



  return (
    <div  className='main_home_container'>
    <header className='home_header'>
       <h1>Bethesda Games Studios Word</h1>
       
       <div className='searchbar_main'>
        <SearchBar/>
       </div>

       <div>
        <NavBar setCurrentPage={setCurrentPage}  setOrderCharter={setOrderCharter}/>
       </div>

      </header>

      <aside className='home_aside'>asyde</aside>

      <body className='home_body'>
        

      

      <div className='container_cards'>
     
       
       {currentCards.length<1?<div className='loader'><Loaders/></div>:currentCards.map(res=>{
      
          return(<div className='container_oneCard' key={res.id}>{
            <Cards name={res.name} image={res.image} rating={res.rating} id={res.id} />
            
            }
          </div>)
       })}
       </div>

       <div className='container_pagination'>
        <Paginate characteByPage={characteByPage} 
        pagine={pagine} 
        getAllCharacters={getAllCharacters.length} 
        currentPage={currentPage}/>
        </div>

      </body>

  

      
      <footer className='home_footer'>
       footer
      </footer>
     
       
    </div>
  )
}

export default Home;