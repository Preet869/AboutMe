window.addEventListener('DOMContentLoaded', function() {
  // Select the arrow element
  const arrow = document.getElementById('arrow');
  arrow.classList.add('fade-in');

  // Function to animate the arrow
  const animateArrow = () => {
    setTimeout(() => {
      arrow.classList.add('move-arrow-animation');
    }, 2000); // Delay of 2 seconds (2000 milliseconds) after the text fades in
  };  
  // Wait for the window to finish loading
  window.addEventListener('load', () => {
    // Set a timeout to delay the arrow animation
    setTimeout(animateArrow, 500); // Delay of 0.5 seconds (500 milliseconds)
  });

  // Select the "More about me..." element
  const moreAboutMe = document.querySelector('.more');

  // Text for the typing effect
  const text = '...';

  // Function to simulate typing effect
  const typeText = () => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        moreAboutMe.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        animateDots(); // Start dot animation
      }
    }, 100);
  };

  // Function to animate the dot animation
  const animateDots = () => {
    const dots = document.querySelector('.dots');
    const dotAnimationInterval = setInterval(() => {
      dots.classList.toggle('dotAnimation');
    }, 500); // Toggle the dot animation class every 0.5 seconds (500 milliseconds)

    // Stop the dot animation after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      clearInterval(dotAnimationInterval);
    }, 3000);
  };

  // Wait for the window to finish loading
  window.addEventListener('load', () => {
    // Set a timeout to delay the typing effect
    setTimeout(typeText, 1000);
  });

  // Add event listener to the arrow button
  const arrowButton = document.querySelector('.button-link');

  arrowButton.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = arrowButton.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });

  // Continuously move the arrow up and down
  const moveArrow = () => {
    arrow.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      arrow.style.transform = 'translateY(0)';
      moveArrow(); // No delay here, continuously move the arrow
    }, 1000);
  };

  // Start the continuous arrow movement
  moveArrow();
});
