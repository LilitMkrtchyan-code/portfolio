export type PromptInputProps = {
  userQuestion: string;
  onChange: (value: string) => void;
  onAsk: () => void;
  onClear: () => void;
  isThinking: boolean;
};
