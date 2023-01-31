
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import Effect from '../components/Effect'
function Home({ title }) {

    const [count, setCount] = useState(0)

  return (
    <div className='landing'>
        <header><h1>L{count}VE</h1></header>
        <div className="card">
            <h1>{title}</h1>
            <Button text="Count" count={count} setCount={setCount} />

        </div>
        <Effect count={count}/>
       
    </div>
  )
}

Home.defaultProps = {
    title:"Home - Welcome"
}

Home.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  }
export default Home
