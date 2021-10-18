export const ChangeSelectedProductOptions = (element) => {
  const SelectedOptionSpan = element.parentNode.previousElementSibling;

  const options = document.querySelectorAll(
    `#${element.parentNode.id} .product-options-item`
  );

  if (options && SelectedOptionSpan) {
    options.forEach((item) => (item.style.outline = ' 1px solid #cfcfcf'));
    element.style.outline = '2px solid var(--primary-color-light)';
    SelectedOptionSpan.innerHTML = element.innerHTML;
  }
};
