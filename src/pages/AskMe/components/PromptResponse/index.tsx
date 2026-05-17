import type { PromptResponseProps } from './types';
import { Sparkles, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import BaseButton from '../../../../components/shared/BaseButton';
import { RESPONSE_TEXTS } from './consts';
import styles from './styles.module.css';

const PromptResponse = ({ myResponse, isThinking, onSave, onDownload }: PromptResponseProps) => {
  return (
    <div className={styles.promptResponse}>
      <div className={styles.responseHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <Sparkles size={20} strokeWidth={2} />
          </div>
          <span className={styles.headerTitle}>{RESPONSE_TEXTS.responseTitle}</span>
        </div>
      </div>

      <div className={styles.responseField}>
        {isThinking ? (
          <div className={styles.loadingState}>{RESPONSE_TEXTS.loadingText}</div>
        ) : (
          <div className="markdownContent">
            <ReactMarkdown>{myResponse}</ReactMarkdown>
          </div>
        )}
      </div>

      {!isThinking && myResponse && (
        <div className={styles.responseFooter}>
          <BaseButton variant="secondary" onClick={onSave} className={styles.btnSave}>
            <span>{RESPONSE_TEXTS.btnSave}</span>
          </BaseButton>
          <BaseButton variant="secondary" onClick={onDownload} className={styles.btnDownload}>
            <Download size={22} strokeWidth={2} />
          </BaseButton>
        </div>
      )}
    </div>
  );
};

export default PromptResponse;
