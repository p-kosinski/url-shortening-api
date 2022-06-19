import { useState } from 'react';

import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import NavMenu from '../../common/NavMenu/NavMenu';
import HeaderLinkList from '../HeaderLinkList/HeaderLinkList';
import LinkButton from '../../common/LinkButton/LinkButton';
import Link from '../../common/Link/Link';
import NavMenuButton from '../../common/NavMenuButton/NavMenuButton';

import styles from './Header.module.scss';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleMenuBtnClick = () => {
    setNavOpen(!navOpen);
  };

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
          <NavMenuButton active={navOpen} onClick={handleMenuBtnClick} />
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