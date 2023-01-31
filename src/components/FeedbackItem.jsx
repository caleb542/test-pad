import { FaEdit, FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import CardIconButton from './shared/CardIconButton'
import CardIconButtons from './shared/CardIconButtons'

function FeedbackItem({ item, handleDelete, index }) {

    // handleDelete = (d) => {
    //     confirm(`Do you wish to delete ${d}'s comment?`)
    // }

  return (
    <>
    <Card reverse={false} index={index}>
        <div className="feedbackItem">
            <CardIconButtons>
                <CardIconButton>
                    <button onClick={() => handleEdit(item.text)}>
                        <FaEdit/>
                    </button>
                </CardIconButton>
                <CardIconButton>
                <button onClick={() => handleDelete(item.id)}>
                        <FaTimes/>
                    </button>
                </CardIconButton>
            </CardIconButtons>
         
            <div className='rating'><span className="rating">{item.rating}</span></div>
            <p className='comment'>{item.text}</p>
            
       {     // <div className='person'>
            //     <img src={item.person.photo} alt={item.person.name} />
            //     <div>{item.person.name}</div>
            // </div>
        }
        </div>
        
    </Card>
    </>
  )
}

export default FeedbackItem