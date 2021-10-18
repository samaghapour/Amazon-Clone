export const ChangeSelectedImageSrc = (image) => {
  const SelectedImage = document.getElementById('SelectedImage');

  if (SelectedImage) {
    SelectedImage.src = image.src;
    SelectedImage.style.width = image.width;
    SelectedImage.style.width = image.height;
  }
};
