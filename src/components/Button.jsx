import PropTypes from 'prop-types'

export default function Button({setCount, text, count}) {
  return (
    <button className="count-button" onClick={() => setCount((count) => count + 1)}>
                {text}: {count}
            </button>
  )
}

Button.defaultProps={
    text: 'Submit'
}

Button.propTypes = {
    text: PropTypes.string
  }