import React, { useEffect, useState } from 'react'
import '../../styles/home.css'


const Paginate = ({characteByPage,pagine,getAllCharacters,currentPage}) => {
    const numberPage=[];
   // const minButton=5;
   
    //const [ButtonControl, setButtonControl] = useState(1)


    

  
    for(let i=1; i<= Math.ceil(getAllCharacters/characteByPage);i++){
        numberPage.push(i)   
    }

   // useEffect(() => {
      //  console.log(numberPage[numberPage-1])
      //  if(numberPage[-1]!==currentPage+minButton){
            
      //  setButtonControl(currentPage+minButton);}

   // }, [currentPage])

    //const controlpaginado =numberPage.slice(currentPage-1,ButtonControl);





  return (
    <div className='container_pagination_continer'>
            

       {/*controlpaginado[0]!==1 && <div
                onClick={()=>{pagine(controlpaginado[0]-1)}}
                className='container_pagination_back'>
           {'<-'}
             </div>*/}

           
            {numberPage.length>1 && numberPage.map(numberPagine=>(
                <div key={numberPagine} className='container_pagination_li'>
                <div
                onClick={()=>{pagine(numberPagine)}}><span  className='container_pagination_span'>{numberPagine}</span></div>
                </div>
                ))}

            {/*numberPage[numberPage.length-1]!==controlpaginado[controlpaginado.length-1] && <div 
                onClick={()=>{pagine(controlpaginado.length-1)}}
                className='container_pagination_next'
                >
               {' ->'}
            </div>*/}

          

    </div>
  )
}

export default Paginate