import { DIRECT_CHANNEL_ITEMS, DIRECT_CHANNELS_TITLE } from './consts';
import styles from './styles.module.css';

const DirectChannels = () => {
  return (
    <section className={styles.directChannels} aria-labelledby="direct-channels-title">
      <h2 id="direct-channels-title" className={styles.sectionTitle}>
        {DIRECT_CHANNELS_TITLE}
      </h2>

      <div className={styles.grid}>
        {DIRECT_CHANNEL_ITEMS.map(channel => {
          const Icon = channel.icon;

          return (
            <a
              key={channel.id}
              href={channel.href}
              className={styles.channelLink}
              {...(channel.isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : undefined)}
            >
              <span className={styles.iconBox} aria-hidden="true">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelTitle}>{channel.title}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default DirectChannels;
