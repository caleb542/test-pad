
function Card({children, reverse, form, index}) {

  return (
    <div 
    className={`special-card ${reverse && 'reverse'} ${form && 'form'}`}
    style={{ animationName:'card', animationDelay:`${index * 0.1}s`}}
    >
      {children}
    </div>
  )
}

export default Card