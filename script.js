// Sample products data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    oldPrice: 129.99,
    category: "Electronics",
    badge: "Sale",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    oldPrice: 399.99,
    category: "Electronics",
    badge: "Hot",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 149.99,
    oldPrice: null,
    category: "Fashion",
    badge: "New",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 79.99,
    oldPrice: 99.99,
    category: "Fashion",
    badge: "Sale",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 59.99,
    oldPrice: null,
    category: "Electronics",
    badge: null,
    rating: 4.4,
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 129.99,
    oldPrice: 159.99,
    category: "Home",
    badge: "Sale",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: 39.99,
    oldPrice: null,
    category: "Sports",
    badge: "New",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 119.99,
    oldPrice: 149.99,
    category: "Fashion",
    badge: "Hot",
    rating: 4.9,
  },
];

let cart = [];

// Render products
function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = products
    .map(
      (product) => `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card product-card shadow-sm">
                        ${
                          product.badge
                            ? `<span class="badge bg-danger badge-custom">${product.badge}</span>`
                            : ""
                        }
                        <div class="product-img d-flex align-items-center justify-content-center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                            <i class="fas fa-cube text-white" style="font-size: 4rem; opacity: 0.3;"></i>
                        </div>
                        <div class="card-body">
                            <p class="text-muted small mb-1">${
                              product.category
                            }</p>
                            <h5 class="card-title mb-2">${product.name}</h5>
                            <div class="mb-2">
                                ${Array(5)
                                  .fill(0)
                                  .map(
                                    (_, i) =>
                                      `<i class="fas fa-star ${
                                        i < Math.floor(product.rating)
                                          ? "text-warning"
                                          : "text-muted"
                                      }" style="font-size: 0.8rem;"></i>`
                                  )
                                  .join("")}
                                <span class="text-muted small ms-1">(${
                                  product.rating
                                })</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <span class="price">$${product.price}</span>
                                    ${
                                      product.oldPrice
                                        ? `<span class="old-price ms-2">$${product.oldPrice}</span>`
                                        : ""
                                    }
                                </div>
                            </div>
                            <button class="btn btn-primary w-100" onclick="addToCart(${
                              product.id
                            })">
                                <i class="fas fa-cart-plus me-2"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
}

// Add to cart functionality
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCartCount();
  showNotification(`${product.name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

function showNotification(message) {
  alert(message);
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    }
  });
});

// Initialize
renderProducts();

// Smooth scroll for navbar links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    // Only handle IDs (starting with #)
    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Active class switching
      document
        .querySelectorAll(".nav-link")
        .forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    }
  });
});

// Smooth scroll for footer links
document.querySelectorAll("footer a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
