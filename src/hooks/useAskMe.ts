import { useState, useCallback } from 'react';
import type { Knowledge } from '../pages/AskMe/components/AskMeWorkspace/types';
import { message } from 'antd';
import { generateGeminiContent } from '../api/gemini';
import { DetectionSection } from '../pages/AskMe/components/KnowledgeBase/utils';
import { cvAiContext } from '../data/cvAiContext';

export const useAskMe = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [myResponse, setMyResponse] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [involvedTopics, setInvolvedTopics] = useState<Knowledge[]>([]);

  const handleAskMe = useCallback(async () => {
    const trimmedQuestion = userQuestion.trim();
    if (!trimmedQuestion) return;

    setIsThinking(true);
    const detectedSections = DetectionSection(trimmedQuestion);

    try {
      const systemContext = `
      ${cvAiContext}

      Current User Question: "${trimmedQuestion}"
      
      Instruction: Provide a concise, professional answer in the first person. 
      If I asked about projects, remind me to check the Projects page.
    `;

      const result = await generateGeminiContent(systemContext);

      setMyResponse(result);
      setInvolvedTopics(detectedSections);
    } catch (error) {
      console.error('Gemini Error:', error);
      message.error("I'm having trouble connecting right now. Please try again.");
      setInvolvedTopics([]);
    } finally {
      setIsThinking(false);
    }
  }, [userQuestion]);

  const clearConversation = useCallback(() => {
    setUserQuestion('');
    setMyResponse('');
    setInvolvedTopics([]);
  }, []);

  return {
    state: { userQuestion, myResponse, isThinking, involvedTopics },
    actions: { setUserQuestion, setMyResponse, setInvolvedTopics, handleAskMe, clearConversation },
  };
};
