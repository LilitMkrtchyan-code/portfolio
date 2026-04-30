import { Sparkles, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import BaseButton from '../../../../components/shared/BaseButton';
import type { CareerResponseProps } from './types';
import styles from './styles.module.css';

const CareerResponse = ({ aiResponse, isLoading, onSave, onDownload }: CareerResponseProps) => {
  return (
    <div className={styles.careerResponse}>
      <div className={styles.responseHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <Sparkles size={16} strokeWidth={3} />
          </div>
          <span className={styles.headerTitle}>Career Response</span>
        </div>
      </div>

      <div className={styles.responseField}>
        {isLoading ? (
          <div className={styles.loadingState}>Gemini is crafting your career path...</div>
        ) : (
          <div className="markdownContent">
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          </div>
        )}
      </div>

      {!isLoading && aiResponse && (
        <div className={styles.responseFooter}>
          <BaseButton variant="secondary" onClick={onSave} className={styles.btnSave}>
            <span>Save Response</span>
          </BaseButton>
          <BaseButton variant="secondary" onClick={onDownload} className={styles.btnDownload}>
            <Download size={22} strokeWidth={2} />
          </BaseButton>
        </div>
      )}
    </div>
  );
};

export default CareerResponse;
