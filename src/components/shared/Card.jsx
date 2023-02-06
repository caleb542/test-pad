
function Card({children, reverse, form, index, sorry}) {

  return (
    <div 
    className={`special-card ${reverse && 'reverse'} ${form && 'form'} ${sorry && 'sorry'}`}
    style={{ animationName:'card', animationDelay:`${index * 0.1}s`}}
    >
      {children}
    </div>
  )
}

export default Card