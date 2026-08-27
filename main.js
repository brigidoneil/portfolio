const container = document.querySelector('.imageGrid');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const width = rect.width;
  
  // If mouse is in the left 20%
  if (mouseX < width * 0.2) {
    container.scrollLeft -= 5;
  } 
  // If mouse is in the right 20%
  else if (mouseX > width * 0.8) {
    container.scrollLeft += 5;
  }
});