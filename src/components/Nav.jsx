import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import Logo from './Logo'

function Nav() {
  return (
    <nav className='navigation'>
    <motion.div
    whileHover={{ scale: .90 }}
> <Logo /> </motion.div>    
        <ul>
        
            <li>
            <motion.div
            whileHover={{ scale: .90 }}>
                <NavLink to='/'  activeclassname="active" className=''>Home</NavLink>
            </motion.div>
            </li>
           
            <li>
            <motion.div
            whileHover={{ scale: .90 }}>
                <NavLink to='/ratings'  activeclassname="active" className=''>Ratings</NavLink>
            </motion.div>        
            </li>
        </ul>
    </nav>    
  )
}

export default Nav