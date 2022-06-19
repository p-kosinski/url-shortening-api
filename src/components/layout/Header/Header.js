import { useState } from 'react';
import clsx from 'clsx';

import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import NavMenu from '../../common/NavMenu/NavMenu';
import HeaderLinkList from '../HeaderLinkList/HeaderLinkList';
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
          <NavMenu opened={navOpen}>
            <HeaderLinkList
              links={[
                <Link to='#0' variant='header'>Features</Link>,
                <Link to='#0' variant='header'>Pricing</Link>,
                <Link to='#0' variant='header'>Resources</Link>
              ]}
            />
            <hr className={styles.divider} />
            <HeaderLinkList
              links={[
                <Link to='#0' variant='header'>Login</Link>,
                <LinkButton to='#0' variant='small'>Sign Up</LinkButton>
              ]}
            />
          </NavMenu>
        </nav>
      </Container>
    </header>
  );
};

export default Header;