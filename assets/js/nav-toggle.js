// Mobile / tablet navigation: opens and closes the menu below 1024px.

function setMenuOpen(toggleButton, menu, label, isOpen) {
  toggleButton.setAttribute("aria-expanded", String(isOpen));
  menu.classList.toggle("hidden", !isOpen);

  if (isOpen) {
    label.textContent = "Close menu";
    return;
  }
  label.textContent = "Open menu";
}

export function initNavToggle() {
  const toggleButton = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (toggleButton === null || menu === null) {
    return;
  }
  const label = toggleButton.querySelector("[data-nav-toggle-label]");
  const menuLinks = menu.querySelectorAll("[data-mobile-link]");

  toggleButton.addEventListener("click", () => {
    const wasOpen = toggleButton.getAttribute("aria-expanded") === "true";
    const shouldOpen = !wasOpen;
    setMenuOpen(toggleButton, menu, label, shouldOpen);
  });

  // Close the menu after choosing a link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(toggleButton, menu, label, false);
    });
  });

  // Close the menu with the Escape key and return focus to the button
  document.addEventListener("keydown", (event) => {
    const isEscape = event.key === "Escape";
    const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
    if (!isEscape || !isOpen) {
      return;
    }
    setMenuOpen(toggleButton, menu, label, false);
    toggleButton.focus();
  });
}
