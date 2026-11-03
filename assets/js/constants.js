// Shared constants: validation rules and user-facing messages.

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_NAME_LENGTH = 2;
export const MIN_MESSAGE_LENGTH = 10;

export const MESSAGES = {
  nameRequired: "Please enter your name.",
  nameTooShort: `Your name should be at least ${MIN_NAME_LENGTH} characters.`,
  emailRequired: "Please enter your email address.",
  emailInvalid: "Please enter a valid email, like you@university.edu.pk.",
  messageRequired: "Please write a short message.",
  messageTooShort: `Your message should be at least ${MIN_MESSAGE_LENGTH} characters.`,
};
