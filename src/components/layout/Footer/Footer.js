import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import LinkIcon from '../../common/LinkIcon/LinkIcon';
import LinkFooter from '../../common/LinkFooter/LinkFooter';
import Attribution from '../../common/Attribution/Attribution';

import { ReactComponent as FacebookIcon } from '../../../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../../images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../../images/icon-instagram.svg';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <LinkLogo to='#0' ariaLabel='home page' textColor='white' />
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.linkList}>
            <h4>Features</h4>
            <ul>
              <li>
                <LinkFooter to='#0'>Link Shortening</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Branded Links</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Analytics</LinkFooter>
              </li>
            </ul>
          </div>
          <div className={styles.linkList}>
            <h4>Resources</h4>
            <ul>
              <li>
                <LinkFooter to='#0'>Blog</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Developers</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Support</LinkFooter>
              </li>
            </ul>
          </div>
          <div className={styles.linkList}>
            <h4>Company</h4>
            <ul>
              <li>
                <LinkFooter to='#0'>About</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Our Team</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Careers</LinkFooter>
              </li>
              <li>
                <LinkFooter to='#0'>Contact</LinkFooter>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.iconsWrapper}>
          <LinkIcon to='#0' icon={<FacebookIcon />} ariaLabel='facebook' />
          <LinkIcon to='#0' icon={<TwitterIcon />} ariaLabel='twitter' />
          <LinkIcon to='#0' icon={<PinterestIcon />} ariaLabel='pinterest' />
          <LinkIcon to='#0' icon={<InstagramIcon />} ariaLabel='instagram' />
        </div>
      </div>
      <Attribution
        author='p-kosinski'
        githubLink='https://github.com/p-kosinski'
      />
    </Container>
  </footer>
);

export default Footer;