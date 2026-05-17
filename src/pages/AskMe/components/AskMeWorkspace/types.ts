export type Knowledge = 'skills' | 'experience' | 'projects' | 'education' | 'languages' | 'title';

export type AskMeWorkspaceProps = {
  myResponse: string;
  isThinking: boolean;
  onSave: () => void;
  onDownload: () => void;
  involvedTopics: Knowledge[];
};
