import PropTypes from 'prop-types';

import styles from './FeatureArticle.module.scss';

const FeatureArticle = ({ icon, title, text }) => (
  <article className={styles.component}>
    <header className={styles.header}>
      <div className={styles.icon}>
        {icon}
      </div>
    </header>
    <section className={styles.content}>
      <h3>{title}</h3>
      <p data-testid='article-paragraph'>{text}</p>
    </section>
  </article>
);

FeatureArticle.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureArticle;