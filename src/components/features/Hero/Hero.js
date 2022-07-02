import LinkButton from '../../common/LinkButton/LinkButton';
import Container from '../../layout/Container/Container';

import IllustrationWorking from '../../../images/illustration-working.svg';

import styles from './Hero.module.scss';

const Hero = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>More than just shorter links</h1>
          <p data-testid='hero-paragraph'>
            Build your brand’s recognition and get
            detailed insights on how your links are performing.
          </p>
          <LinkButton to='#0' variant='default'>
            Get Started
          </LinkButton>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={IllustrationWorking}
            alt='person working on a computer'
          />
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;