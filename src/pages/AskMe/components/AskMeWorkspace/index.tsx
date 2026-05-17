import type { AskMeWorkspaceProps } from './types';
import PromptResponse from '../PromptResponse';
import KnowledgeBase from '../KnowledgeBase';
import styles from './styles.module.css';

const AskMeWorkspace = ({
  myResponse,
  isThinking,
  onSave,
  onDownload,
  involvedTopics,
}: AskMeWorkspaceProps) => {
  return (
    <div className={styles.askMeWorkspace}>
      <PromptResponse
        myResponse={myResponse}
        isThinking={isThinking}
        onSave={onSave}
        onDownload={onDownload}
      />
      <KnowledgeBase involvedTopics={involvedTopics} />
    </div>
  );
};

export default AskMeWorkspace;
