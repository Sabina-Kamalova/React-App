//import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    
  return (
    <nav>
        <div className={styles.wrapper}>
          <Link to='/' className={styles.icon}>
            <i className="fa fa-tasks" aria-hidden="true"></i>
          </Link>
          <ul className={styles.navMenu}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/about">About</NavLink></li>
          </ul>
        </div>
    
    </nav>
  )
}

export default NavBar;