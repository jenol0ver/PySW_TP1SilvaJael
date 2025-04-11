    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const root = document.documentElement;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      root.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
      root.classList.toggle('dark-mode');
      
      if (root.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️';
      } else {
        localStorage.setItem('darkMode', null);
        darkModeToggle.textContent = '🌙';
      }
    });