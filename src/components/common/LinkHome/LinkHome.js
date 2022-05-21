import PropTypes from 'prop-types';

import styles from './LinkHome.module.scss';

const LinkHome = ({ to, icon, textColor }) => {
  if(textColor === 'dark') {
    return (
      <a href={to} className={styles.dark}>
        {icon}
      </a>
    );
  } else if(textColor === 'light') {
    return (
      <a href={to} className={styles.light}>
        {icon}
      </a>
    );
  }
};

LinkHome.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  textColor: PropTypes.oneOf('dark', 'light').isRequired,
};

export default LinkHome;