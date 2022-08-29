import React from 'react';
import { Link } from "react-router-dom";
import Carrusel from '../common/Carrusel';
import  '../../styles/loadPage.css'
import { image6 } from '../../const/const';





const LoadPage = () => {
  return (
    <div className="mean_start_proyect">

      <header className='header_start_proyect'>
      
      <div className='header_start_proyect_flex'>
      <div className='header_start_proyect_icon'>
        <img src={image6} alt='icon' className='header_start_proyect_icon_img'/>
      </div>
      </div>
      
      <div className='header_start_proyect_flex'>
      <div className='header_start_title'>
      <h1>Welcome to our page</h1>
      </div>
      </div>

      <div className='header_start_proyect_flex'>
      <div className='header_start_proyect_botton'>
      <Link to='/home' style={{ color: 'rgb(204, 204, 204)', textDecoration: 'none'}}>
            <button className='header_start_button'>
              <span className='header_start_span'>Get started</span>
              </button>
        </Link>
        </div>
        </div>

      </header>

      <body className='body_start_proyect'>
         <Carrusel/>
      </body>

      <footer className='footer_start_proyect'>footer</footer>
     
    
       
        
    </div> 
  )
}

export default LoadPage;