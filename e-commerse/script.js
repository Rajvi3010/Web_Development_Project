
    function redirectToCart(productName, productPrice) {
        // Redirect to cart page with product details in the query string
        window.location.href = `cart.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}`;
    }

