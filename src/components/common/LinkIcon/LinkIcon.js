import PropTypes from 'prop-types';

import styles from './LinkIcon.module.scss';

const LinkIcon = ({ to, icon, ariaLabel }) => (
  <a
    href={to}
    aria-label={ariaLabel}
    className={styles.component}
  >
    {icon}
  </a>
);

LinkIcon.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default LinkIcon;