import { ReactComponent as BrandRecognitionIcon } from '../../../images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecordsIcon } from '../../../images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizableIcon } from '../../../images/icon-fully-customizable.svg';

import styles from './StatisticsSection.module.scss';

const StatisticsSection = () => (
  <section className={styles.component}>
    <div className={styles.heading}>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>
    </div>
    <div className={styles.articlesWrapper}>
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <div className={styles.icon}>
            <BrandRecognitionIcon />
          </div>
        </header>
        <section className={styles.cardContent}>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </section>
      </article>
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <div className={styles.icon}>
            <DetailedRecordsIcon />
          </div>
        </header>
        <section className={styles.cardContent}>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </section>
      </article>
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <div className={styles.icon}>
            <FullyCustomizableIcon />
          </div>
        </header>
        <section className={styles.cardContent}>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </section>
      </article>
    </div>
  </section>
);

export default StatisticsSection;