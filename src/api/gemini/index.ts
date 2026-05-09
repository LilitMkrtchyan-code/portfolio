import axios, { AxiosError } from 'axios';
import { API_KEY, BASE_URL, MODEL_ID } from './config';
import type { GeminiGenerateContentResponse } from './types';

export const generateGeminiContent = async (prompt: string): Promise<string> => {
  if (!API_KEY) throw new Error('Missing VITE_GEMINI_API_KEY in .env');
  if (!MODEL_ID) throw new Error('Missing VITE_GEMINI_MODEL in .env');
  if (!BASE_URL) throw new Error('Missing VITE_GEMINI_BASE_URL in .env');

  const url = `${BASE_URL}/models/${MODEL_ID}:generateContent`;

  const payload = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };

  try {
    const response = await axios.post<GeminiGenerateContentResponse>(url, payload, {
      params: { key: API_KEY },
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: { message: string } }>;
    const errorMessage = axiosError.response?.data?.error?.message || 'Something went wrong';

    console.error('Gemini API Error:', errorMessage);
    throw new Error(errorMessage);
  }
};
