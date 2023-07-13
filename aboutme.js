document.addEventListener('DOMContentLoaded', function() {
    const projectButton = document.querySelector('.Projects-button');
  
    projectButton.addEventListener('click', (event) => {
      event.preventDefault();
  
      const projectsSection = document.getElementById('projects');
  
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  