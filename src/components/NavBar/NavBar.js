import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    
  return (
    <nav>
        <div className={styles.wrapper}>
          <a href='/' className={styles.icon}>
            <i className="fa fa-tasks" aria-hidden="true"></i>
          </a>
          <ul className={styles.navMenu}>
            <a href='/'>
              <li>Home</li>
            </a>
            <a href='/favorite'>
              <li>Favorite</li>
            </a>
            <a href='/about'>
              <li>About</li>
            </a>
          </ul>
        </div>
    
    </nav>
  )
}

export default NavBar;