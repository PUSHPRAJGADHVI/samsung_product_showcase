// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Search bar toggle
document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block'; // Show the search bar
        searchBar.focus(); // Focus on the search bar
    } else {
        searchBar.style.display = 'none'; // Hide the search bar
    }
});

// Open login modal
document.getElementById('login-icon').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('login-modal').style.display = 'flex'; // Show the modal
});

// Close modal when clicking on the close button
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none'; // Hide the modal
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Example validation (replace with actual authentication logic)
    if (email === "test@gmail.com" && password === "password123") {
        alert("Login successful!");
        document.getElementById('login-modal').style.display = 'none'; // Hide the modal on success
        // Redirect or perform further actions here
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`${button.parentElement.querySelector('h3').textContent} added to cart!`);
        });
    });
});







// Initialize the cart
let cart = [];

// Get references to the cart button, close button, and cart modal
const cartIcon = document.querySelector('.cart-icon');
const closeCartBtn = document.getElementById('close-cart');
const cartModal = document.getElementById('cart-modal');
const checkoutButton = document.getElementById('checkout-button');

// Add event listener to show the cart modal when cart icon is clicked
cartIcon.addEventListener('click', () => {
    displayCart();
    cartModal.style.display = 'flex';
});

// Add event listener to close the cart modal
closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Function to add item to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    displayCart();
}

// Function to display cart items in the modal
function displayCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    cartItemsList.innerHTML = '';  // Clear the list before rendering
    let total = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty</li>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartItemsList.innerHTML += `
                <li>
                    ${item.name} - $${item.price.toFixed(2)} 
                    <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
                </li>`;
        });
    }

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items to your cart before checking out.');
        return;
    }
    
    // Normally, you would redirect to a payment page or perform some processing.
    alert('Proceeding to checkout... \n\nThank you for your purchase!');
    cart = []; // Clear cart after checkout
    displayCart(); // Update the cart display
}

// Add event listener for checkout button
checkoutButton.addEventListener('click', handleCheckout);

// Example: Add items to cart (you can add this to the buttons on your product cards)
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        // You can pass the item name and price dynamically
        const itemName = `Item ${index + 1}`;
        const itemPrice = 99.99 + index * 10; // Just an example, use actual product prices
        addToCart(itemName, itemPrice);
    });
});






document.querySelector('.learn-more-btn').addEventListener('click', function() {
    // Scroll to the AI details section or any other section
    document.querySelector('#more-ai-details').scrollIntoView({ behavior: 'smooth' });
});






// JavaScript for controlling the About Us modal
document.addEventListener("DOMContentLoaded", function() {
    // Select the About Us modal and buttons
    const aboutModal = document.getElementById("about-us-modal");
    const aboutButton = document.querySelector("a[href='#about']");
    const closeAboutModal = document.getElementById("close-about-modal");

    // Open the About Us modal when the About link is clicked
    aboutButton.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        aboutModal.style.display = "block"; // Show the modal
    });

    // Close the About Us modal when the close button is clicked
    closeAboutModal.addEventListener("click", function() {
        aboutModal.style.display = "none"; // Hide the modal
    });

    // Close the modal if the user clicks outside the modal content
    window.addEventListener("click", function(e) {
        if (e.target === aboutModal) {
            aboutModal.style.display = "none";
        }
    });

});





document.addEventListener('DOMContentLoaded', function () {
    // Cart array to store products
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add product to cart
    function addToCart(product) {
        // Check if product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            // If the product exists, increase its quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // Add the new product to the cart with a quantity of 1
            product.quantity = 1;
            cart.push(product);
        }

        // Store the updated cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to cart page after adding product to cart
        window.location.href = 'cart.html';
    }

    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to each button
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Get the product information from the card
            const productCard = this.closest('.card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('p').innerText.replace('Price: $', '');
            const productImage = productCard.querySelector('img').getAttribute('src');

            // Create product object
            const product = {
                id: index + 1,  // Unique product ID
                name: productName,
                price: parseFloat(productPrice),
                image: productImage
            };

            // Add the product to the cart and redirect
            addToCart(product);
        });
    });
});


