document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Fetch products data
        let response = await fetch("backend/get_products.php");
        
        if (!response.ok) {
            console.error('Failed to fetch products:', response.status);
            return;
        }

        let products = await response.json();
        console.log('Fetched products:', products);  // Check if products are loaded correctly

        let productContainer = document.getElementById("puppy-list");

        // Loop through products and add them to the page
        products.forEach(product => {
            let productHTML = `
                <div class="puppy-card">
                    <img src="assets/images/${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">LKR ${product.price.toLocaleString()}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            productContainer.innerHTML += productHTML;
        });

        // Delegate the event listener to the parent container
        productContainer.addEventListener('click', function(event) {
            if (event.target && event.target.classList.contains('add-to-cart')) {
                alert("This puppy has been added to your cart!");
            }
        });

    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
