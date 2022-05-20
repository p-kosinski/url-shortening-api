import PropTypes from 'prop-types';

import styles from './LinkButton.module.scss';

const LinkButton = ({ children, fullWidth }) => (
  <button
    className={fullWidth ? styles.fullWidth : styles.default}
  >
    <>{children}</>
  </button>
);

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LinkButton;