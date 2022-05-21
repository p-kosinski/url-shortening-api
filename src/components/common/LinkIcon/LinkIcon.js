import PropTypes from 'prop-types';

import styles from './LinkIcon.module.scss';

const LinkIcon = ({ to, icon }) => (
  <a href={to} className={styles.component}>
    {icon}
  </a>
);

LinkIcon.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default LinkIcon;