// Pure validation logic for the contact form (no DOM access, easy to test).
import {
  EMAIL_PATTERN,
  MESSAGES,
  MIN_MESSAGE_LENGTH,
  MIN_NAME_LENGTH,
} from "./constants.js";

function validateName(name) {
  if (name.length === 0) {
    return MESSAGES.nameRequired;
  }
  if (name.length < MIN_NAME_LENGTH) {
    return MESSAGES.nameTooShort;
  }
  return "";
}

function validateEmail(email) {
  if (email.length === 0) {
    return MESSAGES.emailRequired;
  }
  const isValidEmail = EMAIL_PATTERN.test(email);
  if (!isValidEmail) {
    return MESSAGES.emailInvalid;
  }
  return "";
}

function validateMessage(message) {
  if (message.length === 0) {
    return MESSAGES.messageRequired;
  }
  if (message.length < MIN_MESSAGE_LENGTH) {
    return MESSAGES.messageTooShort;
  }
  return "";
}

// values: { name, email, message } (already trimmed)
// returns: { name, email, message } where each value is "" when valid
export function validateContactForm(values) {
  const nameError = validateName(values.name);
  const emailError = validateEmail(values.email);
  const messageError = validateMessage(values.message);

  const errors = {
    name: nameError,
    email: emailError,
    message: messageError,
  };
  return errors;
}

export function hasAnyError(errors) {
  const errorTexts = Object.values(errors);
  const firstError = errorTexts.find((text) => text.length > 0);
  return firstError !== undefined;
}
