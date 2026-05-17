import type { Knowledge } from '../AskMeWorkspace/types';

export const KNOWLEDGE_BASE_SECTION = {
  title: 'Knowledge Base',
  statusLoaded: 'Ready',
  statusDefault: 'Available',
};

export const KNOWLEDGE_SECTION_KEYWORDS: Record<Knowledge, RegExp> = {
  skills: /skill|tech|stack|tools|development|frontend|react|typescript/i,
  experience: /experience|work|history|career|job|role|professional/i,
  projects: /project|build|portfolio|application|github/i,
  education: /education|university|degree|study|learning|course/i,
  languages: /language|speak|english|armenian|russian/i,
  title: /professional title|title|position|who are you|about lilit/i,
};

export const KNOWLEDGE_BASE = [
  { id: 'skills', label: 'Core Skills' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'languages', label: 'Languages' },
  { id: 'title', label: 'Professional Title' },
] as const;
