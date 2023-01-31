

function FeedbackStats({ feedback }) {
let i = feedback.length;console.log(` feedback ${i}`)

    let average = feedback.reduce( function(acc, cur) {
       
        console.log(i)
        return (acc) + (cur.rating)/ i

    }, 0) 
    average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
