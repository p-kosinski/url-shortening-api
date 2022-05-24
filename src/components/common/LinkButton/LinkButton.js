import PropTypes from 'prop-types';

import styles from './LinkButton.module.scss';

const LinkButton = ({ children, to, variant }) => (
  <a href={to} className={styles[variant]}>
    <>{children}</>
  </a>
);

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'small']).isRequired,
};

export default LinkButton;