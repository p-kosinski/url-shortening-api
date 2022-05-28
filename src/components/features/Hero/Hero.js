import LinkButton from '../../common/LinkButton/LinkButton';

import styles from './Hero.module.scss';

const Hero = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get
        detailed insights on how your links are performing.
      </p>
      <LinkButton to='#0' variant='default'>
        Get Started
      </LinkButton>
    </div>
  </section>
);

export default Hero;