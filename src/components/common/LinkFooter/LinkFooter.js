import PropTypes from 'prop-types';

import styles from './LinkFooter.module.scss';

const LinkFooter = ({ to, children }) => (
  <a href={to} className={styles.component}>
    <>{children}</>
  </a>
);

LinkFooter.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkFooter;