import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './NavMenuButton.module.scss';

const NavMenuButton = ({ active, onClick }) => (
  <button
    className={clsx(styles.component, active && styles.active)}
    onClick={() => onClick()}
    aria-label={active ? 'close navigation menu' : 'open navigation menu'}
  >
    <FontAwesomeIcon icon={faBars} />
  </button>
);

NavMenuButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavMenuButton;