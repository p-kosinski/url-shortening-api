import FeatureArticle from '../../layout/FeatureArticle/FeatureArticle';

import { ReactComponent as BrandRecognitionIcon } from '../../../images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecordsIcon } from '../../../images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizableIcon } from '../../../images/icon-fully-customizable.svg';

import styles from './StatisticsSection.module.scss';

const StatisticsSection = () => (
  <section className={styles.component}>
    <div className={styles.heading}>
      <h2>Advanced Statistics</h2>
      <p data-testid='statistics-paragraph'>
        Track how your links are performing across the web 
        with our advanced statistics dashboard.
      </p>
    </div>
    <div className={styles.articlesWrapper}>
      <FeatureArticle
        icon={<BrandRecognitionIcon role='presentation' />}
        title='Brand Recognition'
        text='Boost your brand recognition with each click. 
              Generic links don’t mean a thing. 
              Branded links help instil confidence in your content.'
      />
      <FeatureArticle
        icon={<DetailedRecordsIcon role='presentation' />}
        title='Detailed Records'
        text='Gain insights into who is clicking your links. 
              Knowing when and where people engage with your content 
              helps inform better decisions.'
      />
      <FeatureArticle
        icon={<FullyCustomizableIcon role='presentation' />}
        title='Fully Customizable'
        text='Improve brand awareness and content discoverability 
              through customizable links, supercharging audience 
              engagement.'
      />
    </div>
  </section>
);

export default StatisticsSection;