import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import FeedbackData from '../data/FeedbackData'
// import FeedbackItem from '../components/FeedbackItem'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'



function Ratings() {

    const [ feedback, setFeedback] = useState([])
        
    // // get or set feedback in  localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('localfeedback'))
        if(!data || data.length === 0){
            console.log('option 1: no feedback in local Storage, setting up...')
            localStorage.setItem('localfeedback', JSON.stringify(feedback))
            setFeedback(feedback)
        } else if ( (!feedback || feedback.length === 0 ) && (data.length > 0)){
            console.log("option 2")
           setFeedback(data)
        }else if ( feedback ) {
           console.log('option 3')
            localStorage.setItem('localfeedback', JSON.stringify(feedback))
        }

    }, [feedback])






    const deleteFeedback = (id) => {
        if(
            confirm(`You sure you want to delete no.${id}`)
        ){
            setFeedback(feedback.filter((item) => item.id !== id))
            
            if(feedback.length <= 1){
                localStorage.clear()

            }
        }
            
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])

    }
    return (
        <div className='show-ratings'>
            
            <div className="wrapper">
            <header>
                <h1>Ratings & Feedback</h1>
            </header>
                <FeedbackForm handleAdd={addFeedback}/>
            </div>

            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>

        </div>
    )
}

FeedbackStats.propTypes = {
     feedback: PropTypes.array.isRequired
}
export default Ratings