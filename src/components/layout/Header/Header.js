import { useState } from 'react';
import clsx from 'clsx';

import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import LinkButton from '../../common/LinkButton/LinkButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.component}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <LinkLogo to='#0' textColor='dark' />
          </div>
          <button
            className={clsx(styles.menuBtn, navOpen && styles.menuBtnActive)}
            onClick={() => setNavOpen(!navOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className={
              clsx(styles.linksWrapper, navOpen && styles.linksWrapperOpened)
            }
          >
            <ul>
              <li>
                <a href='#0' className={styles.link}>Features</a>
              </li>
              <li>
                <a href='#0' className={styles.link}>Pricing</a>
              </li>
              <li>
                <a href='#0' className={styles.link}>Resources</a>
              </li>
            </ul>
            <hr className={styles.divider} />
            <ul>
              <li>
                <a href='#0' className={styles.link}>Login</a>
              </li>
              <li>
                <LinkButton to='#0' variant='small'>
                  Sign Up
                </LinkButton>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;