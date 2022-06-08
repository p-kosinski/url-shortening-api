import LinkButton from '../../common/LinkButton/LinkButton';

import styles from './BoostSection.module.scss';

const BoostSection = () => (
  <section className={styles.component}>
    <div className={styles.wrapper}>
      <h2>Boost your links today</h2>
      <LinkButton
        to='#0'
        variant='default'
      >
        Get Started
      </LinkButton>
    </div>
  </section>
);

export default BoostSection;