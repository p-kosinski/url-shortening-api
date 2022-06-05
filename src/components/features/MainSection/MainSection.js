import Container from '../../layout/Container/Container';
import ShortenLinks from '../ShortenLinks/ShortenLinks';

import styles from './MainSection.module.scss';

const MainSection = () => (
  <section className={styles.component}>
    <Container>
      <ShortenLinks />
    </Container>
  </section>
);

export default MainSection;