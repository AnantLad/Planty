
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = "scale(1.1)";
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = "scale(1)";
    });
  });
