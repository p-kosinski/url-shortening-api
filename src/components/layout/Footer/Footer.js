import Container from '../Container/Container';
import LinkLogo from '../../common/LinkLogo/LinkLogo';
import LinkIcon from '../../common/LinkIcon/LinkIcon';
import LinkList from '../FooterLinkList/FooterLinkList';
import Link from '../../common/Link/Link';
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
          <LinkList
            title='Features'
            links={[
              <Link to='#0' variant='footer'>Link Shortening</Link>,
              <Link to='#0' variant='footer'>Branded Links</Link>,
              <Link to='#0' variant='footer'>Analytics</Link>
            ]}
          />
          <LinkList
            title='Resources'
            links={[
              <Link to='#0' variant='footer'>Blog</Link>,
              <Link to='#0' variant='footer'>Developers</Link>,
              <Link to='#0' variant='footer'>Support</Link>
            ]}
          />
          <LinkList
            title='Company'
            links={[
              <Link to='#0' variant='footer'>About</Link>,
              <Link to='#0' variant='footer'>Our Team</Link>,
              <Link to='#0' variant='footer'>Careers</Link>,
              <Link to='#0' variant='footer'>Contact</Link>
            ]}
          />
        </div>
        <div className={styles.iconsWrapper}>
          <LinkIcon
            to='#0'
            icon={<FacebookIcon role='presentation' />}
            ariaLabel='facebook'
            externalLink
          />
          <LinkIcon
            to='#0'
            icon={<TwitterIcon role='presentation' />}
            ariaLabel='twitter'
            externalLink
          />
          <LinkIcon
            to='#0'
            icon={<PinterestIcon role='presentation' />}
            ariaLabel='pinterest'
            externalLink
          />
          <LinkIcon
            to='#0'
            icon={<InstagramIcon role='presentation' />}
            ariaLabel='instagram'
            externalLink
          />
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