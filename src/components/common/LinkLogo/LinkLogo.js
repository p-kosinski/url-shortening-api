import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../../images/logo.svg';

import styles from './LinkLogo.module.scss';

const LinkLogo = ({ to, textColor }) => (
  <a href={to} className={styles[textColor]}>
    <Logo />
  </a>
);

LinkLogo.propTypes = {
  to: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf(['dark', 'white']).isRequired,
};

export default LinkLogo;