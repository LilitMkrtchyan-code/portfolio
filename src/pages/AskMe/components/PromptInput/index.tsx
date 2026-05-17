import type { PromptInputProps } from './types';
import { Input } from 'antd';
import { Terminal } from 'lucide-react';
import { ASK_ME_TEXTS } from './consts';
import BaseButton from '../../../../components/shared/BaseButton';
import { MODEL_ID } from '../../../../api/gemini/config';
import styles from './styles.module.css';

const { TextArea } = Input;

const PromptInput = ({ userQuestion, onChange, onAsk, onClear, isThinking }: PromptInputProps) => {
  return (
    <div className={styles.promptInput}>
      <div className={styles.promptHeader}>
        <div className={styles.headerIcon}>
          <Terminal size={20} strokeWidth={2} />
        </div>
        <span className={styles.headerTitle}>{ASK_ME_TEXTS.headerTitle}</span>
      </div>

      <div className={styles.promptField}>
        <TextArea
          value={userQuestion}
          onChange={e => onChange(e.target.value)}
          placeholder={ASK_ME_TEXTS.inputPlaceholder}
          autoSize={{ minRows: 4, maxRows: 10 }}
          variant="borderless"
          className={styles.promptText}
        />
      </div>

      <div className={styles.promptFooter}>
        <div className={styles.buttonGroup}>
          <BaseButton
            variant="primary"
            onClick={onAsk}
            className={styles.btnAsk}
            disabled={isThinking}
          >
            {isThinking ? ASK_ME_TEXTS.btnProcessing : ASK_ME_TEXTS.btnAsk}
          </BaseButton>
          <BaseButton
            variant="secondary"
            className={styles.btnClear}
            onClick={onClear}
            disabled={isThinking}
          >
            {ASK_ME_TEXTS.btnClear}
          </BaseButton>
        </div>

        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{ASK_ME_TEXTS.metaModelLabel}</span>
            <span className={styles.metaValue}>{MODEL_ID}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
