export const ToggleModule = () => {
  const DeliveryModule = document.getElementById('DeliveryModule');

  if (DeliveryModule) {
    DeliveryModule.classList.toggle('openModule');
  }
};
