import React from 'react'
import { consoles} from '../../const/const'
import { FiGithub,FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons/lib';
import { SiReact,SiRedux,SiNodedotjs,SiSequelize,SiPostgresql,SiCss3 } from 'react-icons/si';
import { AiOutlineHtml5 } from "react-icons/ai";

const Footer = () => {

  return (
    <IconContext.Provider value={{size:"2em", color:'white',margin:"20px"}} >
    <div className='footer_gen'>
    <div className='footer_platform'>
    <h4>PLATAFORM</h4>
    <ul className='footer_ul'>
      {consoles.length>0 && consoles.map(res=>{
        return <li key={res}>{res}</li>
      })}
    </ul>
  </div>

  <div className='footer_inform'>
  <div className='footer_conta_tools'>
  <h3>Tools:</h3>
  <div className='footer_tools'>
    <SiReact/>
    <SiRedux/>
    <SiNodedotjs/>
    <SiPostgresql/>
    <SiSequelize/>
    <AiOutlineHtml5/>
    <SiCss3/>

  </div>
  </div>

  <div className='footer_made'>
    
   <h3>More information:</h3>
   <div  className='footer_made_href'>
   <a href='https://n9.cl/3fop6'><FiLinkedin /></a>
   <a href='https://github.com/alberto8812'><FiGithub /></a>
   </div>
  </div>

  </div>
  

  </div>
  </IconContext.Provider>
  )
}

export default Footer