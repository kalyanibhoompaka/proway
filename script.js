document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('input[name="unit-option"]');
    const totalPrice = document.querySelector('.total-price');
  
    // Function to update the visibility of selectors and price
    function updateSelection() {
      // Hide all selectors initially
      document.querySelectorAll('.selectors').forEach(selector => {
        selector.classList.add('hidden');
      });
  
      let price = 0;
  
      // Show the selectors for the selected option and update price
      options.forEach(option => {
        if (option.checked) {
          if (option.value === '1') {
            price = 10;
            document.getElementById('selectors-1').classList.remove('hidden');
          } else if (option.value === '2') {
            price = 18;
            document.getElementById('selectors-2').classList.remove('hidden');
          } else if (option.value === '3') {
            price = 24;
            document.getElementById('selectors-3').classList.remove('hidden');
          }
        }
      });
  
      // Update the total price display
      totalPrice.textContent = `$${price.toFixed(2)} USD`;
    }
  
    // Add event listeners for each radio button to trigger the update
    options.forEach(option => {
      option.addEventListener('change', updateSelection);
    });
  
    // Initial call to set up the default state
    updateSelection();
  });
  