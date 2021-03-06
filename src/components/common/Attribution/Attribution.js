import PropTypes from 'prop-types';

import styles from './Attribution.module.scss';

const Attribution = ({ author, githubLink }) => (
  <div
    className={styles.component}
    data-testid='attribution'
  >
    Challenge by&nbsp;
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel='noreferrer'
    >
      Frontend Mentor
    </a>.&nbsp;
    Coded by&nbsp;
    <a
      href={githubLink}
      target="_blank"
      rel='noreferrer'
    >
      {author}
    </a>.
  </div>
);

Attribution.propTypes = {
  author: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Attribution;