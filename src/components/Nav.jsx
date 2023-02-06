import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import Logo from './Logo'

function Nav() {
  return (
    <nav className='navigation'>
  <Logo />  
        <ul>
        
            <li>
            <motion.button
            whileTap={{ scale: .80 }}>
                <NavLink to='/'  activeclassname="active" className=''>Home</NavLink>
            </motion.button>
            </li>
            <li>
            <motion.button
            whileTap={{ scale: .80 }}>
                <NavLink to='/menu'  activeclassname="active" className=''>Menu</NavLink>
            </motion.button>
            </li>
            <li>
            <motion.button
            whileTap={{ scale: .80 }}>
                <NavLink to='/ratings'  activeclassname="active" className=''>Ratings</NavLink>
            </motion.button>        
            </li>
            <li>
            <motion.button
            whileTap={{ scale: .80 }}>
                <NavLink to='/info'  activeclassname="active" className=''>Info</NavLink>
            </motion.button>        
            </li>
            <li>
            <motion.button
            whileTap={{ scale: .80 }}>
                <NavLink to='/counter'  activeclassname="active" className=''>Counter</NavLink>
            </motion.button>        
            </li>
        </ul>
    </nav>    
  )
}

export default Nav