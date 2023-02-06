
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import Effect from '../components/Effect'
import Hero from '../components/Hero'
function Home({ title, background }) {

    const [count, setCount] = useState(0)

  return (
   
        <header>
            <Hero background='url(./src/assets/food/friends.jpg)'>
            <div className="container">
              <h1>{title}</h1>
            </div>
         
            </Hero>
        </header>


    
  )
}

Home.defaultProps = {
    title:"Welcome! You are"
}

Home.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  }
export default Home
