export const CONTACT_FORM_TITLE = 'Send a Message';

export const CONTACT_FORM_LABELS = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
} as const;

export const CONTACT_FORM_PLACEHOLDERS = {
  name: 'Your name',
  email: 'your email',
  message: '',
} as const;

export const CONTACT_FORM_SUBMIT_TEXT = 'Send Message';

export const CONTACT_FORM_MESSAGES = {
  success: 'Your email client is opening with your message.',
  validationRequired: 'This field is required',
  validationEmail: 'Please enter a valid email address',
} as const;
