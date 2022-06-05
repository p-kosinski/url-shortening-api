import Container from '../../layout/Container/Container';
import ShortenLinks from '../ShortenLinks/ShortenLinks';
import StatisticsSection from '../StatisticsSection/StatisticsSection';

import styles from './MainSection.module.scss';

const MainSection = () => (
  <section className={styles.component}>
    <Container>
      <ShortenLinks />
      <StatisticsSection />
    </Container>
  </section>
);

export default MainSection;