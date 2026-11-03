// Contact form behaviour: reads the fields, shows errors, shows a success message.
// There is no backend, so a valid submission only shows a confirmation.
import { hasAnyError, validateContactForm } from "./form-rules.js";

function readFormValues(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const values = { name, email, message };
  return values;
}

function showFieldError(form, fieldName, errorText) {
  const input = form.elements.namedItem(fieldName);
  const errorElement = form.querySelector(`[data-error-for="${fieldName}"]`);
  const hasError = errorText.length > 0;

  errorElement.textContent = errorText;
  errorElement.classList.toggle("hidden", !hasError);

  if (hasError) {
    input.setAttribute("aria-invalid", "true");
    return;
  }
  input.removeAttribute("aria-invalid");
}

function focusFirstInvalidField(form, errors) {
  const fieldNames = Object.keys(errors);
  const firstInvalidName = fieldNames.find((name) => errors[name].length > 0);
  if (firstInvalidName === undefined) {
    return;
  }
  const firstInvalidInput = form.elements.namedItem(firstInvalidName);
  firstInvalidInput.focus();
}

function showSuccess(form, statusElement, name) {
  const firstName = name.split(" ")[0];
  statusElement.textContent = `Thanks, ${firstName}! We'll reply within one working day.`;
  statusElement.classList.remove("hidden");
  form.reset();
}

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (form === null) {
    return;
  }
  const statusElement = form.querySelector("[data-form-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusElement.classList.add("hidden");

    const values = readFormValues(form);
    const errors = validateContactForm(values);

    Object.entries(errors).forEach(([fieldName, errorText]) => {
      showFieldError(form, fieldName, errorText);
    });

    const formHasErrors = hasAnyError(errors);
    if (formHasErrors) {
      focusFirstInvalidField(form, errors);
      return;
    }
    showSuccess(form, statusElement, values.name);
  });
}
