// "Add" buttons on the product cards update the cart count in the navbar.
// The count lives only in this page session (no backend).

function describeCart(itemCount) {
  if (itemCount === 1) {
    return "Cart, 1 item";
  }
  return `Cart, ${itemCount} items`;
}

export function initCartCounter() {
  const addButtons = document.querySelectorAll("[data-add-to-cart]");
  const cartLink = document.querySelector("[data-cart-link]");
  const countElement = document.querySelector("[data-cart-count]");
  const statusElement = document.querySelector("[data-cart-status]");
  if (cartLink === null || countElement === null) {
    return;
  }

  let itemCount = 0;

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      itemCount = itemCount + 1;
      const itemName = button.dataset.addToCart;
      const cartDescription = describeCart(itemCount);

      countElement.textContent = String(itemCount);
      cartLink.setAttribute("aria-label", cartDescription);
      statusElement.textContent = `${itemName} added. ${cartDescription}.`;
    });
  });
}
