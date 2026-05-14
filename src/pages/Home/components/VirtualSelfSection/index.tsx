import BaseImage from '../../../../components/shared/BaseImage';
import { HERO_IMAGE_URL } from '../../../../consts';
import Heading from '../../../../components/shared/Heading';
import { VIRTUAL_SELF_DESCRIPTION } from './consts';
import BaseButton from '../../../../components/shared/BaseButton';
import { Zap } from 'lucide-react';
import styles from './styles.module.css';

const VirtualSelfSection = () => {
  return (
    <section className={styles.virtualSelf}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.avatarScene}>
            <div className={styles.imageWrapper}>
              <BaseImage
                src={HERO_IMAGE_URL}
                alt="AI Avatar"
                className={styles.profileContainer}
                withHover
              />
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span>System Online</span>
            </div>
          </div>

          <div className={styles.content}>
            <Heading as="span" variant="subtitle" className={styles.subtitle}>
              Intelligence
            </Heading>
            <Heading as="h2" variant="sectionTitle" className={styles.title}>
              Meet My Virtual Self
            </Heading>
            <p className={styles.description}>{VIRTUAL_SELF_DESCRIPTION}</p>
            <div className={styles.languageRow}>
              <div className={styles.waveIcon}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.languages}>Available in 5+ Languages</span>
            </div>

            <BaseButton variant="primary" className={styles.dialogButton}>
              <span>Start Dialogue</span>
              <Zap size={18} className={styles.lightning} />
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualSelfSection;
