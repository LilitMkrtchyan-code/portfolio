import { message } from 'antd';
import AskMeWorkspace from './components/AskMeWorkspace';
import PromptInput from './components/PromptInput';
import { useAskMe } from '../../hooks/useAskMe';
import ContactBanner from '../../components/shared/ContactBanner';
import styles from './styles.module.css';
import Heading from '../../components/shared/Heading';
import { ASK_ME_STRINGS } from './consts';

const AskMe = () => {
  const { state, actions } = useAskMe();
  const { userQuestion, myResponse, isThinking, involvedTopics } = state;
  const { setUserQuestion, handleAskMe, clearConversation } = actions;

  const handleCopy = async () => {
    if (!myResponse.trim()) return;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(myResponse);
        message.success(ASK_ME_STRINGS.copySuccess);
      } else {
        throw new Error(ASK_ME_STRINGS.clipboardNotSupported);
      }
    } catch (error) {
      console.error('Copy Error:', error);
      message.error(ASK_ME_STRINGS.copyError);
    }
  };

  const handleDownload = (): void => {
    if (!myResponse.trim()) return;

    try {
      const blob = new Blob([myResponse], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = ASK_ME_STRINGS.downloadFileName;
      a.click();
      URL.revokeObjectURL(url);
      message.success(ASK_ME_STRINGS.downloadSuccess);
    } catch (error) {
      console.error('Download Error:', error);
      message.error(ASK_ME_STRINGS.downloadError);
    }
  };

  return (
    <section className={styles.askMe}>
      <div className={`container ${styles.askMeContainer}`}>
        <Heading as="h1" variant="pageTitle" className={styles.heroTitle}>
          {ASK_ME_STRINGS.heroTitlePart1} <br />
          <span className={styles.accentText}>{ASK_ME_STRINGS.heroTitleAccent}</span>
        </Heading>
        <div>
          <PromptInput
            userQuestion={userQuestion}
            onChange={setUserQuestion}
            onAsk={handleAskMe}
            onClear={clearConversation}
            isThinking={isThinking}
          />
          <AskMeWorkspace
            myResponse={myResponse}
            isThinking={isThinking}
            involvedTopics={involvedTopics}
            onSave={handleCopy}
            onDownload={handleDownload}
          />
        </div>
        <ContactBanner className={styles.contactCta} />
      </div>
    </section>
  );
};
export default AskMe;
