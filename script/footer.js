document.addEventListener('DOMContentLoaded', () => {
    fetch('/html/footer.html') // Fetch the footer HTML file
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load footer');
        }
        return response.text();
      })
      .then(data => {
        // Insert the fetched HTML into the element with ID "footer"
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
        // Optional fallback message
        document.getElementById('footer').innerHTML = '<p>Footer could not be loaded.</p>';
      });
  });