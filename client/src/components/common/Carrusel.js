import React, { useEffect, useState } from 'react'
import '../../styles/loadPage.css'



const Carrusel = () => {
    const images=['image_1.jpg','image_2.jpg','image_3.jpg','image_4.jpg','image_5.jpg'];
    const [selectorIndex, setSelectorIndex] = useState(0);
    const [selectorImagen, SetselectorImagen] = useState(images[0]);
    const [loaded, setLoaded] = useState(false)

    const next=()=>{
   
            setLoaded(false)
            const condition =selectorIndex<images.length-1;
            const nextIndex=condition? selectorIndex +1 :0;
            SetselectorImagen(images[nextIndex]);
            setSelectorIndex(nextIndex)           


    }

    useEffect(() => {
      const interval=setInterval(()=>{
        next( )
      },8000)
      return ()=>clearInterval(interval)
    },)  
    
   
  return (
    <div className='meanCarruselImg'>

        <img src={require(`../../img/${selectorImagen}`).default}  alt='img presen problem' className={`${loaded?'CarruselImg':'CarruselImg_1'}`} onLoad={()=>setLoaded(true)}/>
    </div>
  )
}

export default Carrusel;

