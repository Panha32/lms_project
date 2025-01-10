const languageSelector = document.getElementById('language');
languageSelector.addEventListener('change', () => {
  const selectedLanguage = languageSelector.value;
  
  // Get the current URL
  const currentUrl = new URL(window.location.href);
  
  // Update the 'lng' query parameter
  currentUrl.searchParams.set('lng', selectedLanguage);
  
  // Reload the page with the updated URL
  window.location.href = currentUrl.toString();
});