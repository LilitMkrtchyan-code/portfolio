import { useState } from 'react';
import { message } from 'antd';
import CareerPrompt from './components/CareerPrompt';
import CareerWorkspace from './components/CareerWorkspace';
import { generateGeminiContent } from '../../api/gemini';
import styles from './styles.module.css';

const CareerAI = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateResponse = async (): Promise<void> => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const result = await generateGeminiContent(prompt);
      setAiResponse(result);
    } catch (error) {
      console.error(error);
      message.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = (): void => {
    setPrompt('');
    setAiResponse('');
  };

  const handleSave = (): void => {
    navigator.clipboard.writeText(aiResponse);
    message.success('Copied!');
  };

  const handleDownload = (): void => {
    const blob = new Blob([aiResponse], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.txt';
    a.click();
    URL.revokeObjectURL(url);
    message.success('Downloaded!');
  };

  return (
    <div className={styles.careerAI}>
      <CareerPrompt
        value={prompt}
        onChange={setPrompt}
        onGenerate={handleGenerateResponse}
        onClear={handleClear}
        isLoading={isLoading}
      />
      <CareerWorkspace
        aiResponse={aiResponse}
        isLoading={isLoading}
        onSave={handleSave}
        onDownload={handleDownload}
      />
    </div>
  );
};
export default CareerAI;
