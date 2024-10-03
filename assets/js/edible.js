// Fetch products from external JSON file
async function fetchProducts() {
  const response = await fetch("../data/categoryOne.json"); // Assuming your JSON file is located in the root directory
  const data = await response.json();
  return data;
}

// Initialize cart from localStorage if available, otherwise use an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Render products
async function renderProducts() {
  const products = await fetchProducts();
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("bg-white", "p-4", "rounded", "shadow-lg");

    productCard.innerHTML = `
        <div class="mb-4">
          <img src="${product.image}" alt="${product.name}" class="mx-auto w-20 h-20 object-contain">
        </div>
        <p class="font-bold text-yellow-600 mb-4">${product.price}</p>
        <h3 class="font-bold mb-2">${product.name}</h3>
        <p class="text-gray-500 text-xs mb-1">${product.brand}</p>
        <p class="text-xs text-gray-700 mb-2">${product.type} • THC: ${product.thc} • CBD: ${product.cbd}</p>
        <div class="mt-auto">
          <button class="bg-yellow-500 text-white px-4 py-2 mt-2 rounded hover:bg-yellow-600" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
        </div>
      `;

    productContainer.appendChild(productCard);
  });
}

// Add item to cart
function addToCart(name, priceString) {
  // Remove the dollar sign and convert price to a number
  const price = Number(priceString.replace("$", ""));

  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart(); // Save cart to localStorage
  renderCart();
  updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").innerText = cartCount;
}

// Render cart in sidebar
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement("li");
    cartItem.classList.add("flex", "justify-between", "items-center");

    cartItem.innerHTML = `
        <div>
          <h3 class="font-bold">${item.name}</h3>
          <p class="text-sm">Price: $${item.price}</p>
          <p class="text-sm">Quantity: ${item.quantity}</p>
        </div>
        <div class="flex space-x-2">
          <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300" onclick="updateQuantity('${item.name}', -1)">-</button>
          <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300" onclick="updateQuantity('${item.name}', 1)">+</button>
          <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onclick="removeFromCart('${item.name}')">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;

    cartList.appendChild(cartItem);
  });

  document.getElementById("total-price").innerText = `$${totalPrice.toFixed(
    2
  )}`;
}

// Remove item from cart
function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  saveCart(); // Save updated cart to localStorage
  renderCart();
  updateCartCount();
}

// Update item quantity
function updateQuantity(name, quantity) {
  const item = cart.find((item) => item.name === name);
  if (item) {
    item.quantity += quantity;
    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      saveCart(); // Save updated cart to localStorage
      renderCart();
      updateCartCount();
    }
  }
}

// Sidebar functionality
const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCartBtn = document.getElementById("close-cart");

// Open sidebar
cartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("translate-x-full");
});

// Close sidebar
closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("translate-x-full");
});

// Initial render
renderProducts();
renderCart(); // Render cart items from localStorage if available
updateCartCount(); // Update cart count on page load
