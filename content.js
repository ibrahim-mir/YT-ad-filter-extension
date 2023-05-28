// Function to filter out non-ad content and display ads
function filterAds() {
    const adElements = document.querySelectorAll('.ytd-display-ad-renderer');
    const nonAdContent = document.querySelectorAll(
      'ytd-rich-item-renderer:not([id="masthead-ad"])'
    );
  
    // Hide non-ad content
    nonAdContent.forEach((element) => {
      element.style.display = 'none';
    });
  
    // Display ads
    adElements.forEach((element) => {
      element.style.display = 'block';
    });
  }
  
  // Function to revert changes when extension is deactivated
  function revertChanges() {
    const nonAdContent = document.querySelectorAll(
      'ytd-rich-item-renderer:not([id="masthead-ad"])'
    );
  
    // Show non-ad content
    nonAdContent.forEach((element) => {
      element.style.display = 'block';
    });
  }
  
  // Toggle filterAds and revertChanges based on extension activation
  function toggleExtensionActivation() {
    if (document.body.classList.contains('extension-activated')) {
      revertChanges();
      document.body.classList.remove('extension-activated');
    } else {
      filterAds();
      document.body.classList.add('extension-activated');
    }
  }
  
  // Listen for messages from the extension popup
  chrome.runtime.onMessage.addListener(function (message) {
    if (message === 'toggle_extension') {
      toggleExtensionActivation();
    }
  });
  