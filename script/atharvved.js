document.addEventListener('DOMContentLoaded', () => {
    fetch('/html/atharvved.html') // Fetch the atharvved HTML file
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load atharvved');
        }
        return response.text();
      })
      .then(data => {
        // Insert the fetched HTML into the element with ID "footer"
        document.getElementById('atharvved').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading atharvved:', error);
        // Optional fallback message
        document.getElementById('atharvved').innerHTML = '<p>atharvved could not be loaded.</p>';
      });
  });