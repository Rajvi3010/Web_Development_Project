<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart - WearShop</title>
    <link rel="stylesheet" href="cart.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </nav>
    </header>

    <!-- Cart Section -->
    <section class="cart-section">
        <h1>Your Cart</h1>
        <div class="cart-items">
            <div class="cart-item">
                <img id="cart-image" src="" alt="Product Image" class="cart-item-image">
                <h2 id="cart-product-name">Product Name</h2>
                <p id="cart-product-price">Price: $0.00</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 WearShop | All Rights Reserved</p>
    </footer>

    <!-- JavaScript to read the URL parameters and display the product -->
    <script>
        // Function to get the query parameters from the URL
        function getQueryParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                name: params.get('name'),
                price: params.get('price'),
                image: params.get('image')
            };
        }

        // Function to update the cart page with the product details
        function displayProductInCart() {
            const product = getQueryParams();

            // Get product details from query parameters
            const productName = product.name;
            const productPrice = product.price;
            const productImage = product.image;

            // Display the product details on the cart page
            document.getElementById('cart-product-name').innerText = productName;
            document.getElementById('cart-product-price').innerText = `Price: $${productPrice}`;
            document.getElementById('cart-image').src = productImage;
        }

        // Call the function to display the product details when the page loads
        window.onload = displayProductInCart;
    </script>
</body>
</html>
