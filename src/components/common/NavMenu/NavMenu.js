import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavMenu.module.scss';

const NavMenu = ({ opened, children }) => (
  <div className={clsx(styles.component, opened && styles.opened)}>
    {children}
  </div>
);

NavMenu.propTypes = {
  opened: PropTypes.bool.isRequired,
};

export default NavMenu;