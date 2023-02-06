function Hero({children, background}) {
  return (
    <div className='hero' style={{backgroundImage:background}}>{
        children
    }</div>
  )
}

export default Hero