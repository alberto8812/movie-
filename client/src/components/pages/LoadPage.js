import React from 'react';
import { Link } from "react-router-dom";
import Carrusel from '../common/Carrusel';
import  '../../styles/loadPage.css'
import { consoles, image6,links,gits } from '../../const/const';





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

      <footer className='footer_start_proyect'>
      <div className='footer_platform'>
          <h4>PLATAFORM</h4>
          <ul className='footer_ul'>
            {consoles.length>0 && consoles.map(res=>{
              return <li key={res}>{res}</li>
            })}
          </ul>
        </div>

        <div className='footer_made'>
         <h3>More information:</h3>
         <a href='https://n9.cl/3fop6'><img src={links} alt="link" className='footer_img'/></a>
         <a href='https://github.com/alberto8812'><img src={gits} alt="link" className='footer_img'/></a>
        </div>
      </footer>
     
    
       
        
    </div> 
  )
}

export default LoadPage;