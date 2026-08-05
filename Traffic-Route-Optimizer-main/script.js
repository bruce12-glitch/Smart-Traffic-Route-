document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('route-form');
  const output = document.getElementById('route-output');
  if (form && output) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const origin = document.getElementById('origin').value;
      const destination = document.getElementById('destination').value;
      // Placeholder/demo behavior: show a friendly message until routing is implemented
      output.textContent = `Demo: route search not implemented yet. Origin: ${origin} → Destination: ${destination}`;
    });
  }
});
