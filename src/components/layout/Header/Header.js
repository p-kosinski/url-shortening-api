import { useState } from 'react';
import clsx from 'clsx';

import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import LinkButton from '../../common/LinkButton/LinkButton';
import LinkHeader from '../../common/LinkHeader/LinkHeader';

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
                <LinkHeader to='#0'>Features</LinkHeader>
              </li>
              <li>
                <LinkHeader to='#0'>Pricing</LinkHeader>
              </li>
              <li>
                <LinkHeader to='#0'>Resources</LinkHeader>
              </li>
            </ul>
            <hr className={styles.divider} />
            <ul>
              <li>
                <LinkHeader to='#0'>Login</LinkHeader>
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