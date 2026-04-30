export type CareerInputProps = {
  value: string;
  onChange: (val: string) => void;
  onGenerate?: () => void;
  onClear?: () => void;
  isLoading?: boolean;
};
