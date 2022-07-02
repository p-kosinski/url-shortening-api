import PropTypes from 'prop-types';

import styles from './FooterLinkList.module.scss';

const FooterLinkList = ({ title, links }) => (
  <div className={styles.component}>
    <p
      className={styles.title}
      data-testid='footer-link-list-title'
    >
      {title}
    </p>
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          {link}
        </li>
      ))}
    </ul>
  </div>
);

FooterLinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FooterLinkList;