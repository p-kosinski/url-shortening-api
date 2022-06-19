import PropTypes from 'prop-types';

import styles from './Link.module.scss';

const Link = ({ to, variant, children }) => (
  <a href={to} className={styles[variant]}>
    <>{children}</>
  </a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['header', 'footer']).isRequired,
  children: PropTypes.string.isRequired,
};

export default Link;