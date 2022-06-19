import { useState } from 'react';
import clsx from 'clsx';

import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import LinkButton from '../../common/LinkButton/LinkButton';
import Link from '../../common/Link/Link';

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
            <LinkLogo
              to='#0'
              ariaLabel='home page'
              textColor='dark'
            />
          </div>
          <button
            className={clsx(styles.menuBtn, navOpen && styles.menuBtnActive)}
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? 'close navigation menu' : 'open navigation menu'}
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
                <Link to='#0' variant='header'>Features</Link>
              </li>
              <li>
                <Link to='#0' variant='header'>Pricing</Link>
              </li>
              <li>
                <Link to='#0' variant='header'>Resources</Link>
              </li>
            </ul>
            <hr className={styles.divider} />
            <ul>
              <li>
                <Link to='#0' variant='header'>Login</Link>
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