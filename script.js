// script.js

// Grab all three lines in one go
const lines = [
    document.getElementById('line1'),
    document.getElementById('line2'),
    document.getElementById('line3')
  ];
  
  // Index to track which line is next
  let idx = 0;
  
  // Fade‐in one line at a time
  const revealNextLine = () => {
    if (idx >= lines.length) return;
    const el = lines[idx];
    el.style.opacity = '1';
    el.style.transition = 'opacity 0.6s ease';
    idx++;
    setTimeout(revealNextLine, 600);
  };
  
  // On window load: hide all, then kick off the sequence
  window.addEventListener('load', () => {
    lines.forEach(el => el.style.opacity = '0');
    setTimeout(revealNextLine, 300);
  });