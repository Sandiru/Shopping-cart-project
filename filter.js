// Function to handle category filter
function handleCategoryFilter(event) {
    event.preventDefault();
    const selectedCategory = event.target.textContent.toLowerCase();
    const products = document.querySelectorAll('.product');
  
    products.forEach((product) => {
      if (selectedCategory === 'filter') {
        product.classList.add('show');
      } else if (product.classList.contains(selectedCategory)) {
        product.classList.add('show');
      } else {
        product.classList.remove('show');
      }
    });
  }
  
  // Attach event listeners to category links
  const categoryLinks = document.querySelectorAll('.ctg a');
  categoryLinks.forEach((link) => {
    link.addEventListener('click', handleCategoryFilter);
  });
  
  // Initial display of all products
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    product.classList.add('show');
  });

  const filteredItems = products.filter(p => p.category > "budget");
 
  // Function to filter products by category
  function filterProductsByCategory(category) {
    const filteredProducts = products.filter((product) => product.category === category);
    return filteredProducts;
  }
  
  // Example usage:
  const categoryToFilter = "budget"; // Replace with the desired category
  const filteredProductsArray = filterProductsByCategory(categoryToFilter);
  console.log(filteredProductsArray);
  

  