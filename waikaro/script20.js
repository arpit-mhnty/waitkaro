// Function to open the popupContainer
function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
  }
  
  // Function to close the popupContainer
  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
  }
  
  // Adding event listeners to the icons
  document.getElementById('kuchv').addEventListener('click', function() {
    openPopup(); // Open the popup when the specific icon is clicked
  });
  
  // Adding event listener to close button inside the popupContainer
  document.getElementById('closePopup').addEventListener('click', function() {
    closePopup(); // Close the popup when close button is clicked
  });
  
  // Adding event listener to Instagram button inside the popupContainer
  document.getElementById('instagram').addEventListener('click', function() {
    // Replace 'https://www.instagram.com/' with your Instagram URL
    window.open('https://www.instagram.com/', '_blank');
  });
  
  // Adding event listener to close button inside the popupContainer
  document.querySelector('.close').addEventListener('click', function() {
    closePopup(); // Close the popup when close button (X) is clicked
  });
  