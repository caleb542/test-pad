import Card from "./shared/Card"
import Timestamp from "react-timestamp"
import Form from "./shared/Form"
import { useState } from "react"
import ButtonB from '../components/shared/ButtonB'
import RatingSelect from "./RatingSelect"
import { FaCommentsDollar } from "react-icons/fa"

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [date, setDate] = useState()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
      e.preventDefault()

    let t=e.target.value
    if(t === ''){
            setBtnDisabled(true)
            setMessage(null)
         } else if( t.trim() !== '' && t.trim().length < 5 ){
            setMessage('A comment must be 5 or more characters to send')
            setBtnDisabled(true)
        } else{
            setMessage(null)
            setBtnDisabled(false)
            setText(e.target.value)
           
        }

       
       
        
    }

    function handleSubmit(e){
        
        e.preventDefault()
        const postTimestamp = new Date(); 
          if(text.trim().length > 4 ) {
            const newFeedback = {
                text: text,
                rating:rating,
                date:new Date()
            }

            handleAdd(newFeedback)
            e.target.value=""
            setText("")
            let input = document.querySelector('form input')
            input.value = "!@#"
          }
    }

    function handleFocus(e) {
        e.target.value=text
        setText("")
        setMessage("")
    } 
    return (
   
        <Form id="form" form="true">
            <form onSubmit={handleSubmit}>    
                <h3>On a scale of 1 to 10, how did we do?</h3>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    
                    <input onFocus={handleFocus} onChange={handleTextChange} type="text" name="" id="" placeholder="Leave a review"  />
                    <ButtonB  type="submit" isDisabled={btnDisabled} >Send</ButtonB>

                </div>
                <div className="message">{message && <span className="message"> {message}</span>}</div>
            </form>
        </Form>
  
  )
}

export default FeedbackForm
