// Function to render products
function renderProducts(products) {
    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = ""; // Clear previous results
  
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `<h3>${product.name}</h3>`;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Function to filter products based on search term
  function filterProducts(searchTerm, products) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Function to handle the search input event
  function handleSearchInput() {
    const searchTerm = document.getElementById("searchInput").value;
    const filteredProducts = filterProducts(searchTerm, products);
    renderProducts(filteredProducts);
  }
  
  // Attach event listener to the search input
  document.getElementById("searchInput").addEventListener("input", handleSearchInput);
  
  // Initial render of all products
  renderProducts(products);
  