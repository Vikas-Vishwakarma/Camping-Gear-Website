console.log("story-image-slider.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const storyImage = document.getElementById('story-image');
  if (!storyImage) {
    console.error("No image with id 'story-image' found!");
    return;
  }

  const imagePaths = [
    'Assest/camping-1.jpg',
    'Assest/camping-2.jpg',
    'Assest/camping-3.jpg'
  ];

  let currentIndex = 0;

  function changeImage() {
    storyImage.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % imagePaths.length;
      storyImage.src = imagePaths[currentIndex];
      storyImage.style.opacity = 1;
    }, 300);
  }

  setInterval(changeImage, 5000);
});
