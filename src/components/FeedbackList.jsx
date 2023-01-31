import FeedbackItem from "./FeedbackItem"
import Card from "./shared/Card"

function FeedbackList({ feedback, handleDelete, setFeedback }) {

  // If empty return some info about being empty
  
  if(!feedback || feedback.length === 0) {

    const fbk = JSON.parse(localStorage.getItem('localfeedback'))
     if ( !fbk || fbk.length === 0) {
      return (<Card>Sorry, No feedback yet.</Card>)
     } else {
      // setFeedback(fbk)
     }  
  }

  let i = feedback.length;
  return (
   <div className="show-ratings">
    {feedback.map((item, index) => (
      <FeedbackItem 
      key={item.id} 
      item={item}
      handleDelete={handleDelete}
      index={index}

      />
    
    ))}
   </div>
  )
}
// <div className="card">
//         <p className='rating'><span>{rating}</span>
//         {comment}</p><p className='person'>
//        {person}</p>
//     </div>
export default FeedbackList