
// Define your screen size media query
//const isDesktop = window.matchMedia("(min-width: 1400px)");

/*
// Only run the code if the media query matches
if (isDesktop.matches) {
  const container = document.getElementById('scroll-container');
  let scrollInterval;

  // Speed of scrolling
  const scrollSpeed = 25; 

  // Trigger when hovering near edges (e.g., within 100px of left/right)
  window.addEventListener('mousemove', (e) => {
    clearInterval(scrollInterval);
    const x = e.clientX;
    const width = window.innerWidth;
    
    if (x < 500) {
      // Hovering near the left edge
      console.log("Hovering left zone!"); // Check if this prints in Console
      scrollInterval = setInterval(() => {
        container.scrollLeft -= scrollSpeed;
      }, 15);
    } else if (x > width - 500) {
      // Hovering near the right edge
      scrollInterval = setInterval(() => {
        container.scrollLeft += scrollSpeed;
      }, 15);
    }
  });

  window.addEventListener('mouseout', () => {
    clearInterval(scrollInterval);
  });

  container.addEventListener('wheel', (e) => {
    // Check if the user is scrolling vertically
    if (e.deltaY !== 0) {
      e.preventDefault(); // Stop the main page from scrolling down
      container.scrollLeft += e.deltaY; // Move container horizontally instead
    }
  });
}
*/

const mediaQuery = window.matchMedia("(min-width: 1400px)");

function handleScreenChange(e) {
      const container = document.getElementById('scroll-container');
      let scrollInterval;

      // Speed of scrolling
      const scrollSpeed = 25; 

  if (e.matches) {
            // Screen is 1400px or wider
      console.log("Tablet/Desktop mode active.");

      // Trigger when hovering near edges (e.g., within 100px of left/right)
      window.addEventListener('mousemove', (e) => {
        clearInterval(scrollInterval);
        const x = e.clientX;
        const width = window.innerWidth;
        
        if (x < 500) {
          // Hovering near the left edge
          console.log("Hovering left zone!"); // Check if this prints in Console
          scrollInterval = setInterval(() => {
            container.scrollLeft -= scrollSpeed;
          }, 15);
        } else if (x > width - 500) {
          // Hovering near the right edge
          scrollInterval = setInterval(() => {
            container.scrollLeft += scrollSpeed;
          }, 15);
        }
      });

      window.addEventListener('mouseout', () => {
        clearInterval(scrollInterval);
      });

      container.addEventListener('wheel', (e) => {
        // Check if the user is scrolling vertically
        if (e.deltaY !== 0) {
          e.preventDefault(); // Stop the main page from scrolling down
          container.scrollLeft += e.deltaY; // Move container horizontally instead
        }
      });
    } else {
        // Screen is smaller than 1400px
        console.log("Mobile mode active.");
        container.addEventListener('wheel', (e) => {
        // Check if the user is scrolling vertically
        if (e.deltaY !== 0) {
          container.scrollTop += e.deltaY; // Move container vertically instead
        }
      });
        //destroyDesktopFeatures();
    }
}

// Register the listener to detect changes in real-time
mediaQuery.addEventListener("change", handleScreenChange);

// Run the check initially on page load
handleScreenChange(mediaQuery);






const galleryItems = document.querySelectorAll('.imageGrid > .gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Open Lightbox to Specific Index
function showImage(index) {
  if (index < 0) index = galleryItems.length - 1;
  if (index >= galleryItems.length) index = 0;
  
  currentIndex = index;
  const fullImgUrl = galleryItems[currentIndex].getAttribute('data-full');
  lightboxImg.src = fullImgUrl;
  lightbox.classList.add('active');
}



// Event Listeners for Clicking Thumbnails
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => showImage(index));
});

// Control Events
closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

// Close when clicking outside the image content wrapper
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});

// Keyboard Accessibility Controls
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') lightbox.classList.remove('active');
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
});