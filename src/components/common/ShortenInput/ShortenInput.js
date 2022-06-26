import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ShortenInput.module.scss';

const ShortenInput = ({ error, errorMsg, onChange }) => (
  <>
    <label htmlFor='shorten-input' className={styles.label}>
      Enter a link to be shortened
    </label>
    <input
      id='shorten-input'
      name='shorten-input'
      placeholder='Shorten a link here...'
      className={clsx(styles.component, error && styles.error)}
      onChange={(event) => onChange(event)}
      aria-required='true'
      aria-invalid={error}
    />
    <div
      role='alert'
      className={clsx(styles.errorMessage, error && styles.errorMessageActive)}
    >
      <span data-testid='error-message'>{errorMsg}</span>
    </div>
  </>
);

ShortenInput.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ShortenInput;