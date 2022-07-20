import {Link} from 'react-router-dom'
import styles from './layout/Navbar.module.css'

function Navbar() {
    return (    
    <ul className={Styles.list}>
        <li className={Styles.item}><Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/empresa">Empresa</Link></li>
      </ul>
      <ul>
        <li><Link to="/contato">Contato</Link></li>
      </ul>)
}

export default Navbar