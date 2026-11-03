// Entry point: wires up each interactive feature of the page.
import { initCartCounter } from "./cart-counter.js";
import { initContactForm } from "./contact-form.js";
import { initNavToggle } from "./nav-toggle.js";

initNavToggle();
initCartCounter();
initContactForm();
