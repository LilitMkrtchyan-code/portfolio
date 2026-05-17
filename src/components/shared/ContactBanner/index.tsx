import type { ReactNode } from 'react';
import type { ContactBannerProps } from './types';
import { ContactBannerClassName } from './utils';
import BaseButton from '../../../components/shared/BaseButton';
import Heading from '../Heading';

import {
  CTA_PRIMARY_BTN_TEXT,
  CTA_SECONDARY_BTN_TEXT,
  CTA_PRIMARY_ROUTE,
  CTA_SECONDARY_ROUTE,
  CTA_TITLE_ACCENT,
  CTA_TITLE_MAIN,
} from './consts';
import styles from './styles.module.css';

const CONTACT_TITLE: ReactNode = (
  <>
    <span className={styles.titleAccent}>{CTA_TITLE_ACCENT} </span> {CTA_TITLE_MAIN}
  </>
);

const ContactBanner = ({ className }: ContactBannerProps) => {
  return (
    <section className={ContactBannerClassName(className)}>
      <div className="container">
        <div className={styles.inner}>
          <Heading as="h2" variant="sectionTitle" className={styles.contactTitle}>
            {CONTACT_TITLE}
          </Heading>

          <div className={styles.actions}>
            <BaseButton variant="primary" to={CTA_PRIMARY_ROUTE} className={styles.btn}>
              {CTA_PRIMARY_BTN_TEXT}
            </BaseButton>

            <BaseButton
              variant="secondary"
              to={CTA_SECONDARY_ROUTE}
              className={`${styles.btn} ${styles.secondary}`}
            >
              {CTA_SECONDARY_BTN_TEXT}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
