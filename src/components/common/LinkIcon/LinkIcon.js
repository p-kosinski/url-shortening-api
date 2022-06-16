import PropTypes from 'prop-types';

import styles from './LinkIcon.module.scss';

const LinkIcon = ({ to, icon, ariaLabel, externalLink }) => (
  <a
    href={to}
    aria-label={externalLink ? `${ariaLabel} (opens in a new tab)` : ariaLabel}
    target={externalLink && '_blank'}
    rel={externalLink && 'noreferrer'}
    className={styles.component}
  >
    {icon}
  </a>
);

LinkIcon.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
};

export default LinkIcon;