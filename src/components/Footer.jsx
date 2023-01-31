import Copy from './Copy'

function Footer( {title, bg, c}) {

    const styles = {
        title:title,
        background:bg,
        color:c
    }

  return (
    <footer style={styles}>
        <p><strong>{title}</strong></p>
        <div><Copy/></div>
    </footer>
  )
}

Footer.defaultProps = {
    title: 'CLICKY COUNTESS',
    bg: 'rgba(0,0,0,1)',
    c:'#ffff00'
}
export default Footer