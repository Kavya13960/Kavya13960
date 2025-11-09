// Get references to elements
const filterDropdown = document.getElementById('categoryFilter');
const products = document.querySelectorAll('.product');

// Add event listener to dropdown
filterDropdown.addEventListener('change', function() {
  const selectedCategory = this.value;

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');

    if (selectedCategory === 'all' || productCategory === selectedCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
