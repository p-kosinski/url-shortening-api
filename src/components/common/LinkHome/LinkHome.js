import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../../images/logo.svg';

import styles from './LinkHome.module.scss';

const LinkHome = ({ to, textColor }) => {
  if(textColor === 'dark') {
    return (
      <a href={to} className={styles.dark}>
        <Logo />
      </a>
    );
  } else if(textColor === 'light') {
    return (
      <a href={to} className={styles.light}>
        <Logo />
      </a>
    );
  }
};

LinkHome.propTypes = {
  to: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf('dark', 'light').isRequired,
};

export default LinkHome;