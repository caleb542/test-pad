import Copy from './Copy'

function Footer( {title, bg, c} ) {

    const styles = {
        title:title,
        background:bg,
        color:c
    }

  return (
    <footer>
      <div>
        <p><strong>{title}</strong></p>
        <Copy/></div>
      
    </footer>
  )
}

Footer.defaultProps = {
    title: 'CH',
    bg: 'rgba(0,0,0,1)',
    c:'#ffff00'
}
export default Footer