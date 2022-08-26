import  { useState } from 'react'
import {postCreateCharacter} from "../redux/actions/index";
import { useDispatch} from "react-redux";
import {useHistory } from "react-router-dom";
import {  random } from '../const/const';


 export const useGameForm = (Value,validate) => {
    const [initialValue, setInitialValue] = useState(Value);
    const [errors, setErrors] = useState({});
    const dispatch=useDispatch();
    const history=useHistory()



    const handleChangue=(e)=>{
      setInitialValue({
          ...initialValue,
          [e.target.name]:e.target.value
        })
      }  
        
      const handleChangueCheckbox=(e)=>{

        if(e.target.checked)
   
        setInitialValue({
          ...initialValue,
          [e.target.name]:{ ...initialValue[e.target.name],[e.target.value]:e.target.value}
        })
        if(!e.target.checked && e.target.type === 'checkbox'){

          setInitialValue({
            ...initialValue,
            [e.target.name]:{ ...initialValue[e.target.name],[e.target.value]:null}
        })

      }
        }


      const handleError=(e)=>{
        handleChangue(e);
        handleChangueCheckbox(e);
        setErrors(validate(initialValue));
        

      }
    
      const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(validate(initialValue))
        if(Object.keys(errors).length===0){
          
          let initialValue2={...initialValue,
            image:initialValue.image===""?random():initialValue.image,
            genres:Object.values(initialValue.genres).filter(res=>res!==null),
            platforms:Object.values(initialValue.platforms).filter(res=>res!==null)}
       
          dispatch(postCreateCharacter(initialValue2))
          alert("The videogame was create")
          setInitialValue({
           name:"",
           released:"",
           rating:0,
           image:"",
           genres:[],
           platforms:[],
           Description:""
          });
          history.push('/home');
        }
        else{
          return
        }
     
        
      }

return{
    initialValue,
    errors,
    handleError,
    handleChangue,
    handleChangueCheckbox,
    handleSubmit
}
    

}



