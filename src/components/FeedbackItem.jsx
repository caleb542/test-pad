import { FaEdit, FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import CardIconButton from './shared/CardIconButton'
import CardIconButtons from './shared/CardIconButtons'
import dateMe, { meridian } from '../../js/dateMe'

function FeedbackItem({ item, handleDelete, index }) {



  return (
    <>
    <Card reverse={false} index={index}>
        <div className="feedbackItem">
           
         
            <div className='rating'><span className="rating">{item.rating}</span></div>

          
            <div className='card-date-button-group'>
                <sup>
                    Posted: <span className="nowrap">{dateMe(item.date)}</span> <span>{meridian(item.date)}</span>
                </sup>
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
            </div>

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