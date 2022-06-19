import PropTypes from 'prop-types';

import styles from './LinkHeader.module.scss';

const LinkHeader = ({ to, children }) => (
  <a href={to} className={styles.component}>
    {children}
  </a>
);

LinkHeader.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkHeader;