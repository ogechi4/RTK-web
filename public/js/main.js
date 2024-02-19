$(document).ready(function() {
    // Initialize AOS
    AOS.init();
    
    // Your other JavaScript code goes here...
  });
  
  // Wait for the DOM to be ready
$(document).ready(function() {
  // Select all navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add click event listeners to the links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Uncheck the checkbox to close the navigation menu
      document.getElementById('check').checked = false;
    });
  });
});
 var date = new Date();
 var year = date.getFullYear();
 document.getElementById('currentY').innerHTML = year;


 //  Adding Active class to the clicked item
const menuItems = document.querySelectorAll('#menu li');


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all items except for the first one
        menuItems.forEach((item, index) => {
            if (index !== 0) {
                item.querySelector('a').classList.remove('active');
            }
        });

        // Add 'active' class to the clicked item
        item.querySelector('a').classList.add('active');
    });
});
