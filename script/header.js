document.addEventListener('DOMContentLoaded', () => {
    fetch('/html/header.html') // Fetch the header HTML file
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load header');
        }
        return response.text();
      })
      .then(data => {
        // Insert the fetched HTML into the element with ID "footer"
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
        // Optional fallback message
        document.getElementById('header').innerHTML = '<p>header could not be loaded.</p>';
      });
  });