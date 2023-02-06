

function FeedbackStats({ feedback }) {
let i = feedback.length;console.log(` feedback ${i}`)

    let average = feedback.reduce( function(acc, cur) {
       
        console.log(i)
        return (acc) + (cur.rating)/ i

    }, 0) 
    average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <p>
        <strong>{feedback.length} Reviews</strong>
      </p>
      <p>
        <strong>Average rating: {isNaN(average) ? 0 : average}</strong>
      </p>
    </div>
  )
}

export default FeedbackStats
