import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../../images/logo.svg';

import styles from './LinkHome.module.scss';

const LinkHome = ({ to, textColor }) => (
  <a href={to} className={styles[textColor]}>
    <Logo />
  </a>
);

LinkHome.propTypes = {
  to: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf('dark', 'light').isRequired,
};

export default LinkHome;