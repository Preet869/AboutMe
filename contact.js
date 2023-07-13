document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.querySelector('.contactbutton');
  const projectButton = document.querySelector('.homebutton');
  const contactSection = document.getElementById('Contact-Me');
  
  sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(function() {
      contactSection.style.backgroundColor = '#F1FEE5';
    }, 1000); // 2000 milliseconds = 2 seconds
  });

  projectButton.addEventListener('click', (event) => {
    event.preventDefault();

    const projectsSection = document.getElementById('home');

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
