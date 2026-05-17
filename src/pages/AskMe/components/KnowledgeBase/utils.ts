import type { Knowledge } from '../AskMeWorkspace/types';
import { KNOWLEDGE_SECTION_KEYWORDS } from './consts';

export const DetectionSection = (userQuery: string): Knowledge[] => {
  const query = userQuery.toLowerCase();

  const detectedSections = (Object.keys(KNOWLEDGE_SECTION_KEYWORDS) as Knowledge[]).filter(
    sectionId => KNOWLEDGE_SECTION_KEYWORDS[sectionId].test(query),
  );

  return detectedSections;
};
