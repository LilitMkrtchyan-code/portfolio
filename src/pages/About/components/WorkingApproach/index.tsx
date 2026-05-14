import {
  WORKING_TITLE_ACCENT,
  WORKING_TITLE_MAIN,
  WORKING_APPROACH_ITEMS,
  WORKING_APPROACH_SUBTITLE,
  WORKING_APPROACH_IMAGE_ALT,
} from './consts';
import type { ReactNode } from 'react';
import SectionHeader from '../../../../components/shared/SectionHeader';
import work from '../../../../assets/images/work.webp';
import BaseImage from '../../../../components/shared/BaseImage';
import styles from './styles.module.css';

const WORKING_APPROACH_TITLE: ReactNode = (
  <>
    <span className={styles.titleMain}>{WORKING_TITLE_MAIN}</span>
    <br />
    <span className={styles.titleAccent}>{WORKING_TITLE_ACCENT}</span>
  </>
);

const WorkingApproach = () => {
  return (
    <section className={styles.workingApproach}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <SectionHeader
              title={WORKING_APPROACH_TITLE}
              subtitle={WORKING_APPROACH_SUBTITLE}
              className={styles.title}
            />
            <div className={styles.list}>
              {WORKING_APPROACH_ITEMS.map(item => (
                <div key={item.id} className={styles.item}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <BaseImage
              src={work}
              alt={WORKING_APPROACH_IMAGE_ALT}
              className={styles.workingImage}
              withHover
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingApproach;
