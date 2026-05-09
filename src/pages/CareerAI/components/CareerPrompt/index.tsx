import type { CareerInputProps } from './types';
import { Input } from 'antd';
import { Terminal } from 'lucide-react';
import { CV_PLACEHOLDER } from './consts';
import BaseButton from '../../../../components/shared/BaseButton';
import { MODEL_ID } from '../../../../api/gemini/config';
import styles from './styles.module.css';

const { TextArea } = Input;

const CareerPrompt = ({ value, onChange, onGenerate, onClear, isLoading }: CareerInputProps) => {
  return (
    <div className={styles.careerPrompt}>
      <div className={styles.promptHeader}>
        <div className={styles.headerIcon}>
          <Terminal size={16} strokeWidth={3} />
        </div>
        <span className={styles.headerTitle}>Career Prompt</span>
      </div>

      <div className={styles.promptField}>
        <TextArea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={CV_PLACEHOLDER}
          autoSize={{ minRows: 4, maxRows: 10 }}
          variant="borderless"
          className={styles.promptText}
        />
      </div>

      <div className={styles.promptFooter}>
        <div className={styles.buttonGroup}>
          <BaseButton
            variant="primary"
            onClick={onGenerate}
            className={styles.btnGenerate}
            disabled={isLoading}
          >
            {isLoading ? 'Processing' : 'Ask Career'}
          </BaseButton>
          <BaseButton variant="secondary" className={styles.btnClear} onClick={onClear}>
            Clear Space
          </BaseButton>
        </div>

        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Latency</span>
            <span className={styles.metaValue}>24ms</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Model</span>
            <span className={styles.metaValue}>{MODEL_ID}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPrompt;
