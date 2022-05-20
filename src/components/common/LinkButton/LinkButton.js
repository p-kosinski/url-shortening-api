import PropTypes from 'prop-types';

import styles from './LinkButton.module.scss';

const LinkButton = ({ children, to, fullWidth }) => (
  <a
    href={to}
    className={fullWidth ? styles.fullWidth : styles.default}
  >
    <>{children}</>
  </a>
);

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

export default LinkButton;