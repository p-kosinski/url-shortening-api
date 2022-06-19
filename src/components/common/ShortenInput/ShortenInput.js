import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ShortenInput.module.scss';

const ShortenInput = ({ error, errorMsg, onChange }) => (
  <>
    <input
      placeholder='Shorten a link here...'
      className={clsx(styles.component, error && styles.error)}
      onChange={(event) => onChange(event)}
      aria-required='true'
      aria-invalid={error}
      aria-errormessage='link-input-error'
    />
    {error &&
      <label
        id='link-input-error'
        className={styles.errorMessage}
      >
        {errorMsg}
      </label>}
  </>
);

ShortenInput.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ShortenInput;