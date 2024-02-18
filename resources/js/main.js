//! Tab navigation

window.addEventListener('keydown', function(e) { // Listens for keyboard
if (e.key === 'Tab') { // Check if the Tab key was pressed
  document.body.classList.add('focus'); // Adds a class to the body
}
});

window.addEventListener('mousedown', function() { // Listens for mouse
  document.body.classList.remove('focus'); // Remove the class from the body
});
