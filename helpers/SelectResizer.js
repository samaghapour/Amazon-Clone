export const resizeSelect = (sel) => {
  let tempOption = document.createElement('option');
  tempOption.textContent = sel.selectedOptions[0].textContent;

  let tempSelect = document.createElement('select');
  tempSelect.style.visibility = 'hidden';
  tempSelect.style.position = 'fixed';
  tempSelect.appendChild(tempOption);

  sel.after(tempSelect);
  sel.style.width = `${+tempSelect.clientWidth + 4}px`;
  tempSelect.remove();
};
