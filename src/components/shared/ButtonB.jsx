import PropTypes from 'prop-types'

function ButtonB( {children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

ButtonB.defaultProps = {
    version: 'primary',
    isDisabled: false
}

ButtonB.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,

}
export default ButtonB
