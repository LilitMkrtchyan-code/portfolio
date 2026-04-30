---
name: gemini-integration
description: Use this skill when working with Gemini API integration
---

# Gemini Integration

## When to Use

- Adding or changing anything related to Gemini API
- Debugging AI responses or errors
- Building new AI-powered features

## Folder Structure

- `src/api/gemini/index.ts` — main function
- `src/api/gemini/config.ts` — env variables
- `src/api/gemini/types.ts` — response types

## Environment Variables

All three live in `config.ts`. Never hardcode them:

- `VITE_GEMINI_API_KEY`
- `VITE_GEMINI_MODEL`
- `VITE_GEMINI_BASE_URL`

Always check they exist before making a request.

## How the API works

- Function: `generateGeminiContent(prompt: string): Promise<string>`
- Never call the API directly from a component
- Endpoint: `{BASE_URL}/models/{MODEL_ID}:generateContent?key=API_KEY`
- Request body:

```ts
const payload = {
  contents: [
    {
      parts: [{ text: prompt }],
    },
  ],
};
```

- Response text:

```ts
return response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
```

## Error Handling

- Validate env vars before the request
- Throw a clear error message from catch
- Show `message.error()` to the user
- Always use `isLoading` state while waiting
