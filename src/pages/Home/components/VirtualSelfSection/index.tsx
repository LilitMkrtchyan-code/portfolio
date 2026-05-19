// import BaseImage from '../../../../components/shared/BaseImage';
// import virtualMe from '../../../../assets/images/virtualMe.png';
import { useRef } from 'react';
import Heading from '../../../../components/shared/Heading';
import profileVideo from '../../../../assets/videos/profileVideo.mp4';
import { VIRTUAL_SELF_DESCRIPTION } from './consts';
import BaseButton from '../../../../components/shared/BaseButton';
import { Zap } from 'lucide-react';
import styles from './styles.module.css';

const VirtualSelfSection = () => {
  const videoRef = useRef(null);

  const handleStartDialogue = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className={styles.virtualSelf}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.avatarScene}>
            <div className={styles.imageWrapper}>
              {/* <BaseImage src={virtualMe} alt="AI Avatar" className={styles.profileContainer} /> */}
              <video
                src={profileVideo}
                ref={videoRef}
                className={styles.profileContainer}
                autoPlay={false}
                muted
                playsInline
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

            <BaseButton
              variant="primary"
              className={styles.dialogButton}
              onClick={handleStartDialogue}
            >
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
