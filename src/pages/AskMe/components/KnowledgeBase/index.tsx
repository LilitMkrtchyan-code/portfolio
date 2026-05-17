import type { KnowledgeBaseProps } from './types';
import Heading from '../../../../components/shared/Heading';
import { KNOWLEDGE_BASE_SECTION, KNOWLEDGE_BASE } from './consts';
import { MoveLeft } from 'lucide-react';
import styles from './styles.module.css';

const KnowledgeBase = ({ involvedTopics }: KnowledgeBaseProps) => {
  return (
    <div className={styles.knowledgeBase}>
      <Heading variant="subtitle" className={styles.title}>
        {KNOWLEDGE_BASE_SECTION.title}
      </Heading>
      <div className={styles.knowledgeList}>
        {KNOWLEDGE_BASE.map(item => {
          const isActive = involvedTopics?.includes(item.id);
          return (
            <div
              key={item.id}
              className={`${styles.knowledgeItem} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.itemLabel}>{item.label}</span>
              <span className={`${styles.itemStatus} ${isActive ? styles.ready : ''}`}>
                {isActive && <MoveLeft size={14} strokeWidth={3} />}
                <span>
                  {isActive
                    ? KNOWLEDGE_BASE_SECTION.statusLoaded
                    : KNOWLEDGE_BASE_SECTION.statusDefault}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KnowledgeBase;
