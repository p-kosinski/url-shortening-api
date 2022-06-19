import PropTypes from 'prop-types';

import styles from './HeaderLinkList.module.scss';

const HeaderLinkList = ({ links }) => (
  <ul className={styles.component}>
    {links.map((link, i) => (
      <li key={i}>
        {link}
      </li>
    ))}
  </ul>
);

HeaderLinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default HeaderLinkList;