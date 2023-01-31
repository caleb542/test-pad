import Card from "./shared/Card"
import Form from "./shared/Form"
import { useState } from "react"
import ButtonB from '../components/shared/ButtonB'
import RatingSelect from "./RatingSelect"
import { FaCommentsDollar } from "react-icons/fa"

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
      e.preventDefault()

    let t=e.target.value
    if(t === ''){
            setBtnDisabled(true)
            setMessage(null)
         } else if( t.trim() !== '' && t.trim().length < 5 ){
            setMessage('A comment must be 5 or more characters')
            setBtnDisabled(true)
        } else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
        
    }

    function handleSubmit(e){
        
        e.preventDefault()
          if(text.trim().length > 4 ) {
            const newFeedback = {
                text: text,
                rating:rating
            }

            handleAdd(newFeedback)

           
            setText('')
          }
    }
    return (
   
        <Form id="form" form="true">
            <form onSubmit={handleSubmit}>    
            
            
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    
                    <input onChange={handleTextChange} type="text" name="" id="" placeholder="Leave a review"  />
                    <ButtonB  type="submit" isDisabled={btnDisabled} >Send</ButtonB>

                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Form>
  
  )
}

export default FeedbackForm
