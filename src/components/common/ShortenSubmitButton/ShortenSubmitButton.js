import PropTypes from 'prop-types';

import styles from './ShortenSubmitButton.module.scss';

const ShortenSubmitButton = ({ onClick }) => (
  <button
    className={styles.submitButton}
    onClick={(event) => onClick(event)}
    aria-label='shorten link'
  >
    Shorten it!
  </button>
);

ShortenSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShortenSubmitButton;