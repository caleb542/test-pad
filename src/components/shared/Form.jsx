
import {motion} from 'framer-motion'

function Form({children, reverse, form}) {
    return (
   

     
     <div  className={`special-form ${reverse && 'reverse'} ${form && 'form'}`}>{children}</div>

        
   
      
    )
  }
  
  export default Form