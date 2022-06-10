import LinkLogo from '../../common/LinkLogo/LinkLogo';
import LinkIcon from '../../common/LinkIcon/LinkIcon';

import { ReactComponent as FacebookIcon } from '../../../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../../images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../../images/icon-instagram.svg';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.component}>
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <LinkLogo
          to='#0'
          ariaLabel='home page'
          textColor='white'
        />
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.linkList}>
          <h4>Features</h4>
          <ul>
            <li>
              <a href='#0'>Link Shortening</a>
            </li>
            <li>
              <a href='#0'>Branded Links</a>
            </li>
            <li>
              <a href='#0'>Analytics</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkList}>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href='#0'>Blog</a>
            </li>
            <li>
              <a href='#0'>Developers</a>
            </li>
            <li>
              <a href='#0'>Support</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkList}>
          <h4>Company</h4>
          <ul>
            <li>
              <a href='#0'>About</a>
            </li>
            <li>
              <a href='#0'>Our Team</a>
            </li>
            <li>
              <a href='#0'>Careers</a>
            </li>
            <li>
              <a href='#0'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <LinkIcon to='#0' icon={<FacebookIcon />} />
        <LinkIcon to='#0' icon={<TwitterIcon />} />
        <LinkIcon to='#0' icon={<PinterestIcon />} />
        <LinkIcon to='#0' icon={<InstagramIcon />} />
      </div>
    </div>
  </footer>
);

export default Footer;