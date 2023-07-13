document.addEventListener('DOMContentLoaded', function() {
  const projectButton = document.querySelector('.contactbutton');

  projectButton.addEventListener('click', (event) => {
    event.preventDefault();

    const projectsSection = document.getElementById('Contact-Me');

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

