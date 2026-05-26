import type { ContactFormValues } from '../../pages/Contact/components/ContactForm/types';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const sendTelegramMessage = async (values: ContactFormValues) => {
  const text = `<b>New Portfolio Message:</b>\n<b>Name:</b> ${values.name}\n<b>Email:</b> ${values.email}\n\n<b>Message:</b>\n${values.message}`;

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};
