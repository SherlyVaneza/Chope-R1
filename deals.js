// Enhanced deals data with complete menu arrays
var dealsData = [
  {
    id: 1,
    title: "Ruth's Chris Steak House",
    location: "Kuningan",
    rating: 4.8,
    reviews: 124,
    currentPrice: 445000,
    originalPrice: 500000,
    discount: 15,
    image: "/Chope-R1/assets/Deals_Resto_RuthChris.webp",
    category: "steakhouse",
    description: "Premium steakhouse experience with the finest cuts of beef and exceptional service.",
    deliveryTime: "45-60 min",
    deliveryFee: 25000,
    minOrder: 200000,
    menu: [
      {
        id: 101,
        name: "Ribeye Steak 300g",
        description: "Premium ribeye steak grilled to perfection, served with garlic mashed potatoes",
        price: 650000,
        originalPrice: 750000,
        image: "/Chope-R1/assets/Deals_Ruth_RibeyeSteak.jpeg",
        category: "Main Course",
        available: true,
      },
      {
        id: 102,
        name: "Lobster Thermidor",
        description: "Fresh lobster in creamy cognac sauce with cheese gratin",
        price: 485000,
        originalPrice: 550000,
        image: "/Chope-R1/assets/Deals_Ruth_Lobster.jpg",
        category: "Main Course",
        available: true,
      },
      {
        id: 103,
        name: "Caesar Salad",
        description: "Classic Caesar salad with crispy croutons and parmesan cheese",
        price: 125000,
        originalPrice: 150000,
        image: "/Chope-R1/assets/Deals_Ruth_Salad.png",
        category: "Appetizer",
        available: true,
      },
      {
        id: 104,
        name: "Filet Mignon 250g",
        description: "Tender filet mignon with red wine reduction and seasonal vegetables",
        price: 580000,
        originalPrice: 680000,
        image: "/Chope-R1/assets/Deals_Ruth_FiletMognon.webp",
        category: "Main Course",
        available: true,
      },
    ],
  },
  {
    id: 2,
    title: "AMUZ Gourmet Restaurant",
    location: "SCBD",
    rating: 4.6,
    reviews: 89,
    currentPrice: 440000,
    originalPrice: 500000,
    discount: 12,
    image: "/Chope-R1/assets/Deals_Resto_AMUZ.jpg",
    category: "fine-dining",
    description: "Contemporary European cuisine with innovative presentation and exceptional flavors.",
    deliveryTime: "35-50 min",
    deliveryFee: 20000,
    minOrder: 150000,
    menu: [
      {
        id: 201,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with orange glaze and roasted vegetables",
        price: 320000,
        originalPrice: 380000,
        image: "/Chope-R1/assets/Deals_AMUZ_DuckConfit.jpg",
        category: "Main Course",
        available: true,
      },
      {
        id: 202,
        name: "Truffle Pasta",
        description: "Handmade pasta with black truffle and wild mushrooms",
        price: 285000,
        originalPrice: 320000,
        image: "/Chope-R1/assets/Deals_AMUZ_TrufflePasta.jpeg",
        category: "Main Course",
        available: true,
      },
      {
        id: 203,
        name: "Foie Gras Terrine",
        description: "Rich foie gras terrine with brioche toast and fig compote",
        price: 195000,
        originalPrice: 220000,
        image: "/Chope-R1/assets/Deals_AMUZ_FoieGras.jpg",
        category: "Appetizer",
        available: true,
      },
    ],
  },
  {
    id: 3,
    title: "Fez Kinara Dining & Shisha",
    location: "Kemang",
    rating: 4.9,
    reviews: 156,
    currentPrice: 169000,
    originalPrice: 200000,
    discount: 16,
    image: "/Chope-R1/assets/Deals_Resto_FezKinara.jpg",
    category: "middle-eastern",
    description: "Authentic Middle Eastern cuisine with traditional shisha experience.",
    deliveryTime: "30-45 min",
    deliveryFee: 15000,
    minOrder: 100000,
    menu: [
      {
        id: 301,
        name: "Mixed Grill Platter",
        description: "Assorted grilled meats with rice, hummus, and pita bread",
        price: 285000,
        originalPrice: 320000,
        image: "/Chope-R1/assets/Deals_Fez_MixedGrillPlatter.jpg",
        category: "Main Course",
        available: true,
      },
      {
        id: 302,
        name: "Lamb Shawarma",
        description: "Tender lamb shawarma with garlic sauce and vegetables",
        price: 165000,
        originalPrice: 185000,
        image: "/Chope-R1/assets/Deals_Fez_LambShawarma.jpg",
        category: "Main Course",
        available: true,
      },
      {
        id: 303,
        name: "Mezze Platter",
        description: "Traditional mezze selection with hummus, baba ganoush, and tabbouleh",
        price: 125000,
        originalPrice: 145000,
        image: "/Chope-R1/assets/Deals_Fez_Mezze.jpg",
        category: "Appetizer",
        available: true,
      },
    ],
  },
  {
    id: 4,
    title: "Sailendra (JW Marriott)",
    location: "Mega Kuningan",
    rating: 4.5,
    reviews: 451,
    currentPrice: 375000,
    originalPrice: 500000,
    discount: 25,
    image: "/Chope-R1/assets/Deals_Resto_Sailendra.jpeg",
    category: "buffet",
    description: "Luxurious buffet dining experience featuring international and Indonesian cuisine.",
    deliveryTime: "60-75 min",
    deliveryFee: 30000,
    minOrder: 300000,
    menu: [
      {
        id: 401,
        name: "International Buffet Dinner",
        description: "All-you-can-eat buffet with international and local specialties",
        price: 485000,
        originalPrice: 650000,
        image: "/Chope-R1/assets/Deals_Sailendra_International.jpg",
        category: "Buffet",
        available: true,
      },
      {
        id: 402,
        name: "Weekend Brunch Buffet",
        description: "Extensive brunch buffet with live cooking stations",
        price: 385000,
        originalPrice: 450000,
        image: "/Chope-R1/assets/Deals_Sailendra_Brunch.jpeg",
        category: "Buffet",
        available: true,
      },
    ],
  },
  {
    id: 5,
    title: "Okuzono Japanese Dining",
    location: "Senopati",
    rating: 4.8,
    reviews: 123,
    currentPrice: 320000,
    originalPrice: 400000,
    discount: 20,
    image: "/Chope-R1/assets/Deals_Resto_Okuzono.webp",
    category: "japanese",
    description: "Authentic Japanese dining experience with fresh sushi and traditional dishes.",
    deliveryTime: "40-55 min",
    deliveryFee: 22000,
    minOrder: 180000,
    menu: [
      {
        id: 501,
        name: "Omakase Set",
        description: "Chef's selection of premium sushi and sashimi",
        price: 485000,
        originalPrice: 580000,
        image: "/Chope-R1/assets/Deals_Okuzono_Omakase.jpg",
        category: "Set Menu",
        available: true,
      },
      {
        id: 502,
        name: "Wagyu Beef Teriyaki",
        description: "Premium wagyu beef with teriyaki glaze and steamed rice",
        price: 385000,
        originalPrice: 450000,
        image: "/Chope-R1/assets/Deals_Okuzono_Wagyu.jpeg",
        category: "Main Course",
        available: true,
      },
      {
        id: 503,
        name: "Chirashi Bowl",
        description: "Assorted fresh sashimi over seasoned sushi rice",
        price: 225000,
        originalPrice: 265000,
        image: "/Chope-R1/assets/Deals_Okuzono_Chirashi.jpg",
        category: "Main Course",
        available: true,
      },
    ],
  },
  {
    id: 6,
    title: "The Coach Restaurant",
    location: "Menteng",
    rating: 4.7,
    reviews: 98,
    currentPrice: 410000,
    originalPrice: 500000,
    discount: 18,
    image: "/Chope-R1/assets/Deals_Resto_TheCoach.jpeg",
    category: "western",
    description: "Classic Western cuisine in an elegant colonial-style setting.",
    deliveryTime: "50-65 min",
    deliveryFee: 28000,
    minOrder: 220000,
    menu: [
      {
        id: 601,
        name: "Beef Wellington",
        description: "Classic beef wellington with mushroom duxelles and puff pastry",
        price: 485000,
        originalPrice: 580000,
        image: "/Chope-R1/assets/Deals_Coach_Beef.jpeg",
        category: "Main Course",
        available: true,
      },
      {
        id: 602,
        name: "Pan-Seared Salmon",
        description: "Fresh Atlantic salmon with lemon butter sauce and vegetables",
        price: 285000,
        originalPrice: 320000,
        image: "/Chope-R1/assets/Deals_Coach_Salmon.webp",
        category: "Main Course",
        available: true,
      },
      {
        id: 603,
        name: "Mushroom Soup",
        description: "Creamy wild mushroom soup with truffle oil",
        price: 85000,
        originalPrice: 95000,
        image: "/Chope-R1/assets/Deals_Coach_Mushroom.jpg",
        category: "Appetizer",
        available: true,
      },
    ],
  },
]

// Global variables
var cart = JSON.parse(localStorage.getItem("chopeCart")) || []
var favorites = JSON.parse(localStorage.getItem("chopeFavorites")) || []
var currentRestaurant = null
var currentFilter = "all"
var currentSort = "discount"
var currentSearchQuery = ""
var filteredDeals = dealsData.slice()

// Checkout state
var checkoutStep = 1
var customerInfo = {}
var selectedPaymentMethod = ""

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  renderDeals()
  updateCartDisplay()
  updateFavoriteButtons()
  setupEventListeners()
  updateDealsCount()

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".navbar")
    if (window.scrollY > 100) {
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)"
    } else {
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  console.log("Chope Deals application initialized successfully!")
}

function setupEventListeners() {
  // Filter tags
  document.querySelectorAll(".filter-tag").forEach((tag) => {
    tag.addEventListener("click", function (e) {
      e.preventDefault()

      // Update active filter
      document.querySelectorAll(".filter-tag").forEach((t) => {
        t.classList.remove("active")
      })
      this.classList.add("active")

      currentFilter = this.dataset.filter
      applyFilters()
    })
  })

  // Sort select
  var sortSelect = document.querySelector(".sort-select")
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      currentSort = this.value
      applyFilters()
    })
  }

  // Search form
  var searchForm = document.querySelector(".search-form")
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault()
      var searchInput = this.querySelector(".search-input")
      var cuisineSelect = this.querySelector(".search-select")

      currentSearchQuery = searchInput.value.toLowerCase()
      applyFilters()
    })
  }

  // Category cards
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      var category = this.dataset.category
      filterDealsByCategory(category)
    })
  })

  // Newsletter form
  var newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      var emailInput = this.querySelector(".newsletter-input")

      if (emailInput.value) {
        showNotification("Thank you for subscribing to our newsletter!", "success")
        emailInput.value = ""
      }
    })
  }

  // Load more button
  var loadMoreBtn = document.getElementById("loadMoreBtn")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      showNotification("All deals are currently displayed!", "info")
    })
  }

  // Customer info form
  var customerInfoForm = document.getElementById("customerInfoForm")
  if (customerInfoForm) {
    customerInfoForm.addEventListener("submit", handleCustomerInfoSubmit)
  }

  // Payment method selection
  document.querySelectorAll(".payment-option").forEach((option) => {
    option.addEventListener("click", function () {
      document.querySelectorAll(".payment-option").forEach((opt) => {
        opt.classList.remove("selected")
      })
      this.classList.add("selected")
      selectedPaymentMethod = this.dataset.payment

      var placeOrderBtn = document.getElementById("placeOrderBtn")
      if (placeOrderBtn) {
        placeOrderBtn.disabled = false
      }
    })
  })

  // Place order button
  var placeOrderBtn = document.getElementById("placeOrderBtn")
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", handlePlaceOrder)
  }
}

// Deal rendering functions
function renderDeals() {
  var dealsGrid = document.getElementById("dealsGrid")
  if (!dealsGrid) return

  dealsGrid.innerHTML = ""

  filteredDeals.forEach((deal, index) => {
    var dealCard = createDealCard(deal)
    dealsGrid.appendChild(dealCard)

    // Add fade-in animation with delay
    setTimeout(() => {
      dealCard.classList.add("visible", "fade-in")
    }, index * 100)
  })
}

// Update the createDealCard function to include a Book button
function createDealCard(deal) {
  var dealCard = document.createElement("div")
  dealCard.className = "deal-card"
  dealCard.setAttribute("data-deal-id", deal.id)

  var isFavorite = favorites.includes(deal.id)
  var favoriteClass = isFavorite ? "fas" : "far"
  var favoriteStyle = isFavorite ? "color: #ef4444;" : ""

  dealCard.innerHTML =
    '<div class="deal-image-container">' +
    '<img src="' +
    deal.image +
    '" alt="' +
    deal.title +
    '" class="deal-image">' +
    '<div class="discount-badge">-' +
    deal.discount +
    "%</div>" +
    '<button class="favorite-btn ' +
    (isFavorite ? "active" : "") +
    '" onclick="toggleFavorite(' +
    deal.id +
    ', this)">' +
    '<i class="' +
    favoriteClass +
    ' fa-heart" style="' +
    favoriteStyle +
    '"></i>' +
    "</button>" +
    (deal.category === "buffet" ? '<div class="deal-badge buffet">BUFFET</div>' : "") +
    (deal.id === 5 ? '<div class="deal-badge new">NEW</div>' : "") +
    "</div>" +
    '<div class="deal-content">' +
    '<h3 class="deal-title">' +
    deal.title +
    "</h3>" +
    '<div class="deal-location">' +
    '<i class="fas fa-map-marker-alt"></i>' +
    "<span>" +
    deal.location +
    "</span>" +
    "</div>" +
    '<div class="deal-rating">' +
    '<div class="stars">' +
    generateStars(deal.rating) +
    "</div>" +
    '<span class="rating-text">' +
    deal.rating +
    " (" +
    deal.reviews +
    " reviews)</span>" +
    "</div>" +
    '<div class="deal-pricing">' +
    '<div class="price-info">' +
    '<div class="current-price">Rp ' +
    deal.currentPrice.toLocaleString("id-ID") +
    "</div>" +
    '<div class="original-price">Rp ' +
    deal.originalPrice.toLocaleString("id-ID") +
    "</div>" +
    "</div>" +
    '<div class="deal-buttons">' +
    '<button class="view-deal-btn" onclick="openFoodOrderModal(' +
    deal.id +
    ')">View Deal</button>' +
    '<button class="book-deal-btn" onclick="bookDeal(' +
    deal.id +
    ')">Book</button>' +
    "</div>" +
    "</div>" +
    "</div>"

  // Add click event to the card (excluding buttons)
  dealCard.addEventListener("click", (e) => {
    if (
      !e.target.closest(".favorite-btn") &&
      !e.target.closest(".view-deal-btn") &&
      !e.target.closest(".book-deal-btn")
    ) {
      openFoodOrderModal(deal.id)
    }
  })

  return dealCard
}

// Add a new function to handle booking a deal directly
function bookDeal(dealId) {
  var deal = dealsData.find((d) => d.id === dealId)
  if (!deal) return

  // Create a cart item for the deal (using the first menu item as default)
  var defaultMenuItem = deal.menu[0]

  var cartItem = {
    id: defaultMenuItem.id,
    name: defaultMenuItem.name,
    price: defaultMenuItem.price,
    quantity: 1,
    restaurantId: deal.id,
    restaurantName: deal.title,
    image: defaultMenuItem.image,
  }

  // Add to cart
  cart.push(cartItem)

  // Update cart display and save
  updateCartDisplay()
  saveCart()

  // Show notification
  showNotification(deal.title + " deal added to cart!", "success")

  // Optionally open the cart modal
  openCartModal()
}

function generateStars(rating) {
  var stars = ""
  for (var i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star"></i>'
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt"></i>'
    } else {
      stars += '<i class="far fa-star"></i>'
    }
  }
  return stars
}

// Filtering and sorting functions
function applyFilters() {
  filteredDeals = dealsData.slice()

  // Apply category filter
  if (currentFilter !== "all") {
    filteredDeals = filteredDeals.filter((deal) => {
      switch (currentFilter) {
        case "buffet":
          return deal.category === "buffet"
        case "japanese":
          return deal.category === "japanese"
        case "western":
          return deal.category === "western"
        case "buy1get1":
          return deal.discount >= 20 // Simulate buy 1 get 1 deals
        case "setmenu":
          return deal.menu.some((item) => item.category === "Set Menu")
        case "happyhour":
          return deal.discount >= 15 // Simulate happy hour deals
        case "weekend":
          return deal.discount >= 18 // Simulate weekend specials
        default:
          return true
      }
    })
  }

  // Apply search filter
  if (currentSearchQuery) {
    filteredDeals = filteredDeals.filter(
      (deal) =>
        deal.title.toLowerCase().includes(currentSearchQuery) ||
        deal.location.toLowerCase().includes(currentSearchQuery) ||
        deal.category.toLowerCase().includes(currentSearchQuery),
    )
  }

  // Apply sorting
  filteredDeals.sort((a, b) => {
    switch (currentSort) {
      case "discount":
        return b.discount - a.discount
      case "rating":
        return b.rating - a.rating
      case "price":
        return a.currentPrice - b.currentPrice
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  renderDeals()
  updateDealsCount()
}

function filterDealsByCategory(category) {
  // Update filter tag
  document.querySelectorAll(".filter-tag").forEach((tag) => {
    tag.classList.remove("active")
  })

  if (category === "all") {
    document.querySelector('.filter-tag[data-filter="all"]').classList.add("active")
    currentFilter = "all"
  } else {
    // Map category names to filter values
    var categoryMap = {
      japanese: "japanese",
      korean: "korean",
      indonesian: "indonesian",
      chinese: "chinese",
      coffee: "coffee",
      desserts: "desserts",
      vouchers: "vouchers",
    }

    currentFilter = categoryMap[category] || "all"
  }

  applyFilters()

  // Scroll to deals section
  document.querySelector(".deals-section").scrollIntoView({
    behavior: "smooth",
  })
}

function updateDealsCount() {
  var visibleCount = document.getElementById("visibleDealsCount")
  var totalCount = document.getElementById("totalDealsCount")

  if (visibleCount) visibleCount.textContent = filteredDeals.length
  if (totalCount) totalCount.textContent = dealsData.length
}

// Favorite functionality
function toggleFavorite(dealId, button) {
  var icon = button.querySelector("i")

  if (favorites.includes(dealId)) {
    favorites = favorites.filter((id) => id !== dealId)
    icon.classList.remove("fas")
    icon.classList.add("far")
    icon.style.color = ""
    button.classList.remove("active")
    showNotification("Removed from favorites", "info")
  } else {
    favorites.push(dealId)
    icon.classList.remove("far")
    icon.classList.add("fas")
    icon.style.color = "#ef4444"
    button.classList.add("active")
    showNotification("Added to favorites", "success")
  }

  localStorage.setItem("chopeFavorites", JSON.stringify(favorites))
}

function updateFavoriteButtons() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    var dealCard = btn.closest(".deal-card")
    if (dealCard) {
      var dealId = Number.parseInt(dealCard.dataset.dealId)

      if (favorites.includes(dealId)) {
        var icon = btn.querySelector("i")
        icon.classList.remove("far")
        icon.classList.add("fas")
        icon.style.color = "#ef4444"
        btn.classList.add("active")
      }
    }
  })
}

// Food Order Modal functions
function openFoodOrderModal(dealId) {
  var restaurant = dealsData.find((r) => r.id === dealId)
  if (!restaurant) return

  currentRestaurant = restaurant

  var modal = document.getElementById("foodOrderModal")
  var title = document.getElementById("foodOrderModalTitle")
  var content = document.getElementById("foodOrderModalContent")

  title.innerHTML =
    "<h2>" +
    restaurant.title +
    "</h2>" +
    '<div class="restaurant-info">' +
    '<span><i class="fas fa-clock"></i> ' +
    restaurant.deliveryTime +
    "</span>" +
    '<span><i class="fas fa-motorcycle"></i> Rp ' +
    restaurant.deliveryFee.toLocaleString("id-ID") +
    "</span>" +
    '<span><i class="fas fa-shopping-bag"></i> Min order: Rp ' +
    restaurant.minOrder.toLocaleString("id-ID") +
    "</span>" +
    "</div>"

  var menuItemsHtml = restaurant.menu
    .map((item) => {
      var discountBadge =
        item.originalPrice > item.price
          ? '<div class="discount-badge">-' + Math.round((1 - item.price / item.originalPrice) * 100) + "%</div>"
          : ""

      var originalPriceHtml =
        item.originalPrice > item.price
          ? '<span class="original-price">Rp ' + item.originalPrice.toLocaleString("id-ID") + "</span>"
          : ""

      return (
        '<div class="menu-item" data-item-id="' +
        item.id +
        '">' +
        '<div class="menu-item-image">' +
        '<img src="' +
        item.image +
        '" alt="' +
        item.name +
        '" />' +
        discountBadge +
        "</div>" +
        '<div class="menu-item-content">' +
        '<h4 class="menu-item-name">' +
        item.name +
        "</h4>" +
        '<p class="menu-item-description">' +
        item.description +
        "</p>" +
        '<div class="menu-item-pricing">' +
        '<div class="price-section">' +
        '<span class="current-price">Rp ' +
        item.price.toLocaleString("id-ID") +
        "</span>" +
        originalPriceHtml +
        "</div>" +
        '<div class="quantity-controls">' +
        '<button class="quantity-btn minus" onclick="updateItemQuantity(' +
        item.id +
        ', -1)">' +
        '<i class="fas fa-minus"></i>' +
        "</button>" +
        '<span class="quantity" id="quantity-' +
        item.id +
        '">' +
        getItemQuantity(item.id) +
        "</span>" +
        '<button class="quantity-btn plus" onclick="updateItemQuantity(' +
        item.id +
        ', 1)">' +
        '<i class="fas fa-plus"></i>' +
        "</button>" +
        "</div>" +
        "</div>" +
        '<button class="add-to-cart-btn" onclick="addToCart(' +
        item.id +
        ')" ' +
        (!item.available ? "disabled" : "") +
        ">" +
        (!item.available ? "Currently Unavailable" : "Add to Cart") +
        "</button>" +
        "</div>" +
        "</div>"
      )
    })
    .join("")

  content.innerHTML =
    '<div class="menu-section">' +
    "<h3>Menu Items</h3>" +
    '<div class="menu-items">' +
    menuItemsHtml +
    "</div>" +
    "</div>" +
    '<div class="cart-section">' +
    '<div class="cart-summary" id="cartSummary">' +
    generateCartSummary() +
    "</div>" +
    "</div>"

  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

// Add function to add the current deal to cart
function addDealToCart() {
  if (!currentRestaurant) return

  // Find the cheapest menu item to add as the default
  var cheapestItem = currentRestaurant.menu.reduce(
    (cheapest, item) => (item.price < cheapest.price ? item : cheapest),
    currentRestaurant.menu[0],
  )

  // Create cart item
  var cartItem = {
    id: cheapestItem.id,
    name: cheapestItem.name,
    price: cheapestItem.price,
    quantity: 1,
    restaurantId: currentRestaurant.id,
    restaurantName: currentRestaurant.title,
    image: cheapestItem.image,
  }

  // Add to cart
  cart.push(cartItem)

  // Update cart display and save
  updateCartDisplay()
  saveCart()

  // Close modal and show notification
  closeFoodOrderModal()
  showNotification(currentRestaurant.title + " deal added to cart!", "success")

  // Optionally open the cart modal
  openCartModal()
}

function closeFoodOrderModal() {
  var modal = document.getElementById("foodOrderModal")
  if (modal) {
    modal.classList.remove("show")
    document.body.style.overflow = "auto"
  }
}

// Cart management functions
function getItemQuantity(itemId) {
  if (!currentRestaurant) return 0
  var cartItem = cart.find((item) => item.id === itemId && item.restaurantId === currentRestaurant.id)
  return cartItem ? cartItem.quantity : 0
}

function updateItemQuantity(itemId, change) {
  if (!currentRestaurant) return

  var menuItem = currentRestaurant.menu.find((item) => item.id === itemId)
  if (!menuItem || !menuItem.available) return

  var existingItem = cart.find((item) => item.id === itemId && item.restaurantId === currentRestaurant.id)

  if (existingItem) {
    existingItem.quantity += change
    if (existingItem.quantity <= 0) {
      cart = cart.filter((item) => !(item.id === itemId && item.restaurantId === currentRestaurant.id))
    }
  } else if (change > 0) {
    cart.push({
      id: itemId,
      name: menuItem.name,
      price: menuItem.price,
      quantity: change,
      restaurantId: currentRestaurant.id,
      restaurantName: currentRestaurant.title,
      image: menuItem.image,
    })
  }

  // Update display
  var quantityElement = document.getElementById("quantity-" + itemId)
  if (quantityElement) {
    quantityElement.textContent = getItemQuantity(itemId)
  }

  updateCartSummary()
  updateCartDisplay()
  saveCart()
}

function addToCart(itemId) {
  updateItemQuantity(itemId, 1)
  showNotification("Item added to cart!", "success")
}

function generateCartSummary() {
  if (!currentRestaurant) return "<p>No restaurant selected</p>"

  var restaurantItems = cart.filter((item) => item.restaurantId === currentRestaurant.id)

  if (restaurantItems.length === 0) {
    return (
      '<div class="empty-cart">' +
      '<i class="fas fa-shopping-cart"></i>' +
      "<p>Your cart is empty</p>" +
      '<p class="cart-subtitle">Add items to get started</p>' +
      "</div>"
    )
  }

  var subtotal = restaurantItems.reduce((total, item) => total + item.price * item.quantity, 0)
  var deliveryFee = currentRestaurant.deliveryFee
  var total = subtotal + deliveryFee

  var cartItemsHtml = restaurantItems
    .map(
      (item) =>
        '<div class="cart-item">' +
        '<div class="cart-item-info">' +
        '<span class="cart-item-name">' +
        item.name +
        "</span>" +
        '<span class="cart-item-price">Rp ' +
        (item.price * item.quantity).toLocaleString("id-ID") +
        "</span>" +
        "</div>" +
        '<div class="cart-item-controls">' +
        '<button class="quantity-btn minus" onclick="updateItemQuantity(' +
        item.id +
        ', -1)">' +
        '<i class="fas fa-minus"></i>' +
        "</button>" +
        '<span class="quantity">' +
        item.quantity +
        "</span>" +
        '<button class="quantity-btn plus" onclick="updateItemQuantity(' +
        item.id +
        ', 1)">' +
        '<i class="fas fa-plus"></i>' +
        "</button>" +
        "</div>" +
        "</div>",
    )
    .join("")

  var totalItemCount = restaurantItems.reduce((total, item) => total + item.quantity, 0)

  var checkoutBtnDisabled = subtotal < currentRestaurant.minOrder
  var checkoutBtnText = checkoutBtnDisabled
    ? "Minimum order Rp " + currentRestaurant.minOrder.toLocaleString("id-ID")
    : "Proceed to Checkout"

  return (
    '<div class="cart-header">' +
    '<h3><i class="fas fa-shopping-cart"></i> Your Order</h3>' +
    '<span class="cart-count">' +
    totalItemCount +
    " items</span>" +
    "</div>" +
    '<div class="cart-items">' +
    cartItemsHtml +
    "</div>" +
    '<div class="cart-totals">' +
    '<div class="cart-total-line">' +
    "<span>Subtotal</span>" +
    "<span>Rp " +
    subtotal.toLocaleString("id-ID") +
    "</span>" +
    "</div>" +
    '<div class="cart-total-line">' +
    "<span>Delivery Fee</span>" +
    "<span>Rp " +
    deliveryFee.toLocaleString("id-ID") +
    "</span>" +
    "</div>" +
    '<div class="cart-total-line total">' +
    "<span>Total</span>" +
    "<span>Rp " +
    total.toLocaleString("id-ID") +
    "</span>" +
    "</div>" +
    "</div>" +
    '<button class="checkout-btn" onclick="proceedToCheckout()" ' +
    (checkoutBtnDisabled ? "disabled" : "") +
    ">" +
    checkoutBtnText +
    "</button>"
  )
}

function updateCartSummary() {
  var cartSummary = document.getElementById("cartSummary")
  if (cartSummary) {
    cartSummary.innerHTML = generateCartSummary()
  }
}

function updateCartDisplay() {
  var cartIcon = document.getElementById("cartIcon")
  if (cartIcon) {
    var totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    if (totalItems > 0) {
      cartIcon.textContent = totalItems
      cartIcon.style.display = "block"
    } else {
      cartIcon.style.display = "none"
    }
  }
}

function saveCart() {
  localStorage.setItem("chopeCart", JSON.stringify(cart))
}

// Cart modal functions
function openCartModal() {
  var modal = document.getElementById("cartModal")
  var cartItems = document.getElementById("cartItems")
  var cartSummary = document.getElementById("cartModalSummary")
  var proceedBtn = document.getElementById("proceedToCheckoutBtn")

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<div class="empty-cart">' +
      '<i class="fas fa-shopping-cart"></i>' +
      "<p>Your cart is empty</p>" +
      '<p class="cart-subtitle">Add some delicious items to get started!</p>' +
      "</div>"
    cartSummary.innerHTML = ""
    if (proceedBtn) proceedBtn.disabled = true
  } else {
    // Group items by restaurant
    var groupedCart = cart.reduce((groups, item) => {
      if (!groups[item.restaurantId]) {
        groups[item.restaurantId] = {
          restaurantName: item.restaurantName,
          items: [],
        }
      }
      groups[item.restaurantId].items.push(item)
      return groups
    }, {})

    var groupedCartHtml = Object.values(groupedCart)
      .map((group) => {
        var groupItemsHtml = group.items
          .map(
            (item) =>
              '<div class="cart-item">' +
              '<div class="cart-item-info">' +
              '<div class="cart-item-name">' +
              item.name +
              "</div>" +
              '<div class="cart-item-price">Rp ' +
              item.price.toLocaleString("id-ID") +
              " each</div>" +
              "</div>" +
              '<div class="cart-item-controls">' +
              '<button class="quantity-btn minus" onclick="updateCartItemQuantity(' +
              item.id +
              ", " +
              item.restaurantId +
              ', -1)">' +
              '<i class="fas fa-minus"></i>' +
              "</button>" +
              '<span class="quantity">' +
              item.quantity +
              "</span>" +
              '<button class="quantity-btn plus" onclick="updateCartItemQuantity(' +
              item.id +
              ", " +
              item.restaurantId +
              ', 1)">' +
              '<i class="fas fa-plus"></i>' +
              "</button>" +
              "</div>" +
              "</div>",
          )
          .join("")

        return (
          '<div class="restaurant-group">' +
          '<h4 class="restaurant-name">' +
          group.restaurantName +
          "</h4>" +
          groupItemsHtml +
          "</div>"
        )
      })
      .join("")

    cartItems.innerHTML = groupedCartHtml

    var total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    cartSummary.innerHTML =
      '<div class="cart-total-line total">' +
      "<span>Total</span>" +
      "<span>Rp " +
      total.toLocaleString("id-ID") +
      "</span>" +
      "</div>"

    if (proceedBtn) proceedBtn.disabled = false
  }

  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeCartModal() {
  var modal = document.getElementById("cartModal")
  if (modal) {
    modal.classList.remove("show")
    document.body.style.overflow = "auto"
  }
}

function updateCartItemQuantity(itemId, restaurantId, change) {
  var item = cart.find((item) => item.id === itemId && item.restaurantId === restaurantId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    cart = cart.filter((item) => !(item.id === itemId && item.restaurantId === restaurantId))
  }

  updateCartDisplay()
  saveCart()
  openCartModal() // Refresh the modal
}

// Checkout functions
function proceedToCheckout() {
  if (cart.length === 0) return

  closeFoodOrderModal()
  closeCartModal()
  openCheckoutModal()
}

function openCheckoutModal() {
  var modal = document.getElementById("checkoutModal")
  var total = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // Reset checkout state
  checkoutStep = 1
  customerInfo = {}
  selectedPaymentMethod = ""

  // Update total in step 1
  var checkoutTotal = document.getElementById("checkoutTotal")
  if (checkoutTotal) {
    checkoutTotal.textContent = "Rp " + total.toLocaleString("id-ID")
  }

  // Show step 1, hide others
  showCheckoutStep(1)

  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeCheckoutModal() {
  var modal = document.getElementById("checkoutModal")
  if (modal) {
    modal.classList.remove("show")
    document.body.style.overflow = "auto"
  }
}

function showCheckoutStep(step) {
  // Hide all steps
  for (var i = 1; i <= 3; i++) {
    var stepElement = document.getElementById("checkoutStep" + i)
    if (stepElement) {
      stepElement.style.display = "none"
    }
  }

  // Show current step
  var currentStepElement = document.getElementById("checkoutStep" + step)
  if (currentStepElement) {
    currentStepElement.style.display = "block"
  }

  // Update modal title
  var modalTitle = document.getElementById("checkoutModalTitle")
  if (modalTitle) {
    switch (step) {
      case 1:
        modalTitle.textContent = "Customer Information"
        break
      case 2:
        modalTitle.textContent = "Payment Method"
        break
      case 3:
        modalTitle.textContent = "Order Confirmation"
        break
    }
  }

  checkoutStep = step
}

function handleCustomerInfoSubmit(e) {
  e.preventDefault()

  var formData = new FormData(e.target)
  var fullName = formData.get("fullName").trim()
  var phoneNumber = formData.get("phoneNumber").trim()
  var emailAddress = formData.get("emailAddress").trim()

  // Clear previous errors
  clearFormErrors()

  // Validate form
  var hasErrors = false

  if (!fullName) {
    showFormError("fullNameError", "Full name is required")
    hasErrors = true
  }

  if (!phoneNumber) {
    showFormError("phoneNumberError", "Phone number is required")
    hasErrors = true
  } else if (!/^\+?[\d\s-()]+$/.test(phoneNumber)) {
    showFormError("phoneNumberError", "Please enter a valid phone number")
    hasErrors = true
  }

  if (!emailAddress) {
    showFormError("emailAddressError", "Email address is required")
    hasErrors = true
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
    showFormError("emailAddressError", "Please enter a valid email address")
    hasErrors = true
  }

  if (hasErrors) return

  // Store customer info
  customerInfo = { fullName: fullName, phoneNumber: phoneNumber, emailAddress: emailAddress }

  // Update step 2 with customer info and total
  var total = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  document.getElementById("checkoutTotal2").textContent = "Rp " + total.toLocaleString("id-ID")
  document.getElementById("summaryFullName").textContent = fullName
  document.getElementById("summaryPhoneNumber").textContent = phoneNumber
  document.getElementById("summaryEmailAddress").textContent = emailAddress

  // Move to step 2
  showCheckoutStep(2)
}

function handlePlaceOrder() {
  if (!selectedPaymentMethod) {
    showFormError("paymentMethodError", "Please select a payment method")
    return
  }

  // Generate order ID
  var orderId = "CH-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  var total = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // Get payment method name
  var paymentMethods = {
    "credit-card": "Credit Card",
    bca: "BCA Virtual Account",
    gopay: "GoPay",
    ovo: "OVO",
  }

  // Update step 3 with order details
  document.getElementById("orderIdValue").textContent = orderId
  document.getElementById("totalAmountValue").textContent = "Rp " + total.toLocaleString("id-ID")
  document.getElementById("paymentMethodValue").textContent = paymentMethods[selectedPaymentMethod]

  // Move to step 3
  showCheckoutStep(3)
}

function finishCheckout() {
  // Clear cart
  cart = []
  saveCart()
  updateCartDisplay()

  // Close modal
  closeCheckoutModal()

  // Show success notification
  showNotification("Order placed successfully! Thank you for your purchase.", "success")
}

function clearFormErrors() {
  document.querySelectorAll(".error-message").forEach((error) => {
    error.classList.remove("show")
    error.textContent = ""
  })

  document.querySelectorAll("input.error").forEach((input) => {
    input.classList.remove("error")
  })
}

function showFormError(errorId, message) {
  var errorElement = document.getElementById(errorId)
  if (errorElement) {
    errorElement.textContent = message
    errorElement.classList.add("show")
  }

  // Add error class to input
  var inputName = errorId.replace("Error", "")
  var inputElement = document.getElementById(inputName)
  if (inputElement) {
    inputElement.classList.add("error")
  }
}

// Notification system
function showNotification(message, type) {
  type = type || "info"
  var container = document.getElementById("notificationContainer")
  if (!container) return

  var notification = document.createElement("div")
  notification.className = "notification " + type
  notification.textContent = message

  container.appendChild(notification)

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      if (container.contains(notification)) {
        container.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

// Utility functions
function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString("id-ID")
}

function generateOrderId() {
  return "CH-" + Math.random().toString(36).substr(2, 9).toUpperCase()
}

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    if (e.target.id === "foodOrderModal") {
      closeFoodOrderModal()
    } else if (e.target.id === "cartModal") {
      closeCartModal()
    } else if (e.target.id === "checkoutModal") {
      closeCheckoutModal()
    }
  }
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeFoodOrderModal()
    closeCartModal()
    closeCheckoutModal()
  }
})

console.log("Chope Deals JavaScript loaded successfully!")
