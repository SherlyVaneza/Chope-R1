// Data
const cuisines = [
  "African",
  "All-Day Breakfast",
  "American",
  "Asian",
  "Argentinian",
  "Australian",
  "Bar",
  "Bakery & Pastry",
  "Balinese",
  "Beverages",
  "British",
  "Buffet",
  "Burgers & Sandwiches",
  "Cafe",
  "Caribbean",
  "Chinese",
  "Coffee",
  "Contemporary French",
  "Cuban",
  "European",
  "Farm to table",
  "French",
  "German",
  "Greek",
  "Greek Mediterranean",
  "Hot Pot",
  "Indian",
  "Indonesian",
  "International",
  "Italian",
  "Japanese",
  "Korean",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Moroccan",
  "Modern European",
  "Portuguese",
  "Seafood",
  "Shabu-Shabu",
  "South American",
  "Southeast Asian",
  "Spanish",
  "Steak",
  "Thai",
  "Vegetarian Friendly",
  "Turkish",
  "Western",
  "Vietnamese",
  "Vegan",
  "Korean-Grill",
  "Japanese-Grill",
]

const locations = [
  "Ancol",
  "Bellagio",
  "Bekasi",
  "Bellagio Mall",
  "Bintaro",
  "Blok M",
  "Bogor",
  "Central Park",
  "Cikini",
  "Cilandak",
  "Cipete",
  "Dharmawangsa",
  "Fatmawati",
  "Gajah Mada",
  "Gandaria",
  "Pesanggrahan",
  "Gandaria City",
  "Gatot Subroto",
  "Grand Indonesia",
  "Grogol",
  "Kalideres",
  "Karet",
  "Radio Dalam",
  "Kebayoran Baru",
  "Kebayoran Lama",
  "Kebon Jeruk",
  "Kelapa Gading",
  "Kemang",
  "Kembangan",
  "Kuningan",
  "Lebak Bulus",
  "Mall Kelapa Gading",
  "Mangga Besar",
  "Menteng",
  "Melawai",
  "Pacific Place",
  "Pantai Indah Kapuk",
  "Penjaringan",
  "Pecenongan",
  "PIK Avenue",
  "Plaza Indonesia",
  "Plaza Senayan",
  "Pluit",
  "Pondok Indah",
  "Pondok Indah Mall",
  "Puri Indah",
  "SCBD",
  "Senayan",
  "Senayan City",
  "Senopati",
  "Serpong",
  "Setiabudhi",
  "Slip",
  "Sudirman",
  "Sunter",
  "Tangerang",
  "Tebet",
  "Thamrin",
  "Jatinegara",
  "Cikarang",
  "Gambir",
  "Kalibata",
  "Senen",
  "Pasar Minggu",
  "Pasar Rebo",
  "Kota Kasablanka",
  "Ashta District 8",
  "Elysee",
  "Senayan (Senayan Park)",
  "Pasar Mayestik",
  "Gading Serpong",
  "Alam Sutera",
  "BSD City",
  "Mega Kuningan",
  "Duren Sawit",
]

const goodForOptions = [
  "Al Fresco",
  "Bar & Lounge",
  "Brunch",
  "Casual Dining",
  "Fine Dining",
  "Karaoke",
  "Kid & Family Friendly",
  "Large Parties",
  "Live Music",
  "Private Room",
  "Romantic Dates",
  "Views",
]

const othersOptions = [
  "Biko Group",
  "Bandar Djakarta Group",
  "Double Tree by Hilton",
  "Fairmont Jakarta",
  "Mandarin Oriental",
  "New",
  "Butterman",
  "Union Group",
  "GIOI",
  "MKA Group",
  "APJF Group",
  "Gran Melia Hotel",
  "The Garden",
]

// Update the restaurant data to include menu item images
const restaurants = [
  {
    id: 1,
    name: "Sola Ristorante",
    rating: 4.8,
    reviews: 144,
    address: "Jl. Purworejo No.23, Menteng, Jakarta",
    image: "/Chope-R1/assets/Sola_Directory.webp",
    cuisine: ["Italian", "Fine Dining"],
    location: "Menteng",
    price: 3,
    menu: [
      {
        name: "Truffle Mushroom Risotto",
        description: "Creamy risotto with wild mushrooms and black truffle oil.",
        price: "IDR 180,000",
        image: "/Chope-R1/assets/directory_Sola_Truffle.jpg",
      },
      {
        name: "Osso Buco",
        description: "Braised veal shanks in a rich white wine and tomato sauce.",
        price: "IDR 350,000",
        image: "/Chope-R1/assets/Directory_Sola_Osso.webp",
      },
      {
        name: "Classic Tiramisu",
        description: "Coffee-soaked ladyfingers layered with mascarpone cream.",
        price: "IDR 95,000",
        image: "/Chope-R1/assets/directory_Sola_Tiramisu.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Warung Tekko",
    rating: 4.5,
    reviews: 89,
    address: "Jl. Senopati No.15, Kebayoran Baru, Jakarta",
    image: "/Chope-R1/assets/WarungTekko_Directory.jpg",
    cuisine: ["Indonesian", "Traditional"],
    location: "Senopati",
    price: 2,
    menu: [
      {
        name: "Nasi Gudeg Yogya",
        description: "Traditional Javanese jackfruit curry with rice and side dishes.",
        price: "IDR 45,000",
        image: "/Chope-R1/assets/Directory_Tekko_Gudeg.jpeg",
      },
      {
        name: "Ayam Bakar Taliwang",
        description: "Grilled chicken with spicy Lombok-style seasoning.",
        price: "IDR 65,000",
        image: "/Chope-R1/assets/Directory_Tekko_Ayam.jpeg",
      },
      {
        name: "Es Cendol Durian",
        description: "Traditional Indonesian dessert with durian and coconut milk.",
        price: "IDR 25,000",
        image: "/Chope-R1/assets/Directory_Tekko_Cendol.webp",
      },
    ],
  },
  // Add images to all other restaurants...
  {
    id: 3,
    name: "Sakana Sushi Bar",
    rating: 4.7,
    reviews: 203,
    address: "Plaza Indonesia, Jl. M.H. Thamrin, Jakarta",
    image: "/Chope-R1/assets/Sakana_Directory.jpg",
    cuisine: ["Japanese", "Sushi"],
    location: "Thamrin",
    price: 3,
    menu: [
      {
        name: "Omakase Set",
        description: "Chef's selection of 12 pieces of premium sushi.",
        price: "IDR 450,000",
        image: "/Chope-R1/assets/Directory_Sakana_Omakase.jpg",
      },
      {
        name: "Chirashi Bowl",
        description: "Assorted sashimi over seasoned sushi rice.",
        price: "IDR 185,000",
        image: "/Chope-R1/assets/Directory_Sakana_Chirashi.jpg",
      },
      {
        name: "Miso Ramen",
        description: "Rich miso broth with chashu pork and soft-boiled egg.",
        price: "IDR 95,000",
        image: "/Chope-R1/assets/Directory_Sakana_MisoRamen.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Le Bistro Français",
    rating: 4.6,
    reviews: 156,
    address: "Jl. Kemang Raya No.8, Kemang, Jakarta",
    image: "/Chope-R1/assets/LeBistro_Directory.jpg",
    cuisine: ["French", "Fine Dining"],
    location: "Kemang",
    price: 4,
    menu: [
      {
        name: "Coq au Vin",
        description: "Braised chicken in red wine with pearl onions and mushrooms.",
        price: "IDR 285,000",
        image: "/Chope-R1/assets/Directory_LeBistro_Coq.jpg",
      },
      {
        name: "Bouillabaisse",
        description: "Traditional Provençal fish stew with rouille and croutons.",
        price: "IDR 320,000",
        image: "/Chope-R1/assets/Directory_LeBistro_Bou.jpg",
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar top.",
        price: "IDR 85,000",
        image: "/Chope-R1/assets/Directory_LeBistro_Creme.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Spice Garden Thai",
    rating: 4.4,
    reviews: 127,
    address: "Jl. Pantai Indah Kapuk, PIK, Jakarta",
    image: "/Chope-R1/assets/SpiceGarden_Directory.jpeg",
    cuisine: ["Thai", "Asian"],
    location: "PIK",
    price: 2,
    menu: [
      {
        name: "Tom Yum Goong",
        description: "Spicy and sour soup with prawns, lemongrass, and lime leaves.",
        price: "IDR 75,000",
        image: "/Chope-R1/assets/Directory_Spice_TomYum.jpg",
      },
      {
        name: "Pad Thai",
        description: "Stir-fried rice noodles with shrimp, tofu, and tamarind sauce.",
        price: "IDR 65,000",
        image: "/Chope-R1/assets/Directory_Spice_PadThai.webp",
      },
      {
        name: "Mango Sticky Rice",
        description: "Sweet sticky rice with fresh mango and coconut milk.",
        price: "IDR 45,000",
        image: "/Chope-R1/assets/Directory_Spice_Mango.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Burger Junction",
    rating: 4.2,
    reviews: 298,
    address: "Jl. Sudirman No.45, SCBD, Jakarta",
    image: "/Chope-R1/assets/BurgerJunction_Directory.jpeg",
    cuisine: ["American", "Burgers"],
    location: "SCBD",
    price: 2,
    menu: [
      {
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, and special sauce.",
        price: "IDR 85,000",
        image: "/Chope-R1/assets/Directory_Burger_Classic.jpeg",
      },
      {
        name: "BBQ Bacon Burger",
        description: "Beef patty with crispy bacon, BBQ sauce, and onion rings.",
        price: "IDR 105,000",
        image: "/Chope-R1/assets/Directory_Burger_BBQ.jpeg",
      },
      {
        name: "Loaded Fries",
        description: "Crispy fries topped with cheese, bacon, and jalapeños.",
        price: "IDR 55,000",
        image: "/Chope-R1/assets/Directory_Burger_Fries.jpeg",
      },
    ],
  },
  {
    id: 7,
    name: "Dim Sum Palace",
    rating: 4.5,
    reviews: 189,
    address: "Jl. Gajah Mada No.188, Glodok, Jakarta",
    image: "/Chope-R1/assets/DimSumPalace_Directory.jpg",
    cuisine: ["Chinese", "Dim Sum"],
    location: "Glodok",
    price: 2,
    menu: [
      {
        name: "Har Gow",
        description: "Steamed shrimp dumplings with translucent wrapper.",
        price: "IDR 45,000",
        image: "/Chope-R1/assets/Directory_DimSum_HarGow.jpg",
      },
      {
        name: "Siu Mai",
        description: "Steamed pork and shrimp dumplings topped with crab roe.",
        price: "IDR 42,000",
        image: "/Chope-R1/assets/Directory_DimSum_SiuMai.webp",
      },
      {
        name: "Char Siu Bao",
        description: "Steamed BBQ pork buns with fluffy white dough.",
        price: "IDR 38,000",
        image: "/Chope-R1/assets/Directory_DimSum_CharSiuBao.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Pizza Napoletana",
    rating: 4.3,
    reviews: 167,
    address: "Jl. Benda Raya No.12, Kemang, Jakarta",
    image: "/Chope-R1/assets/PizzaNapoletana_Directory.webp",
    cuisine: ["Italian", "Pizza"],
    location: "Kemang",
    price: 2,
    menu: [
      {
        name: "Margherita",
        description: "Classic pizza with San Marzano tomatoes, mozzarella, and basil.",
        price: "IDR 125,000",
        image: "/Chope-R1/assets/Directory_Pizza_Margherita.jpeg",
      },
      {
        name: "Quattro Stagioni",
        description: "Four seasons pizza with artichokes, ham, mushrooms, and olives.",
        price: "IDR 165,000",
        image: "/Chope-R1/assets/Directory_Pizza_Quattro.jpg",
      },
      {
        name: "Gelato Trio",
        description: "Three scoops of artisanal gelato: vanilla, chocolate, and pistachio.",
        price: "IDR 65,000",
        image: "/Chope-R1/assets/Directory_Pizza_Gelato.webp",
      },
    ],
  },
  {
    id: 9,
    name: "Seoul Kitchen",
    rating: 4.6,
    reviews: 234,
    address: "Jl. Kelapa Gading Boulevard, Kelapa Gading, Jakarta",
    image: "/Chope-R1/assets/SeoulKitchen_Directory.webp",
    cuisine: ["Korean", "BBQ"],
    location: "Kelapa Gading",
    price: 3,
    menu: [
      {
        name: "Korean BBQ Set",
        description: "Premium beef bulgogi and galbi with banchan and rice.",
        price: "IDR 285,000",
        image: "/Chope-R1/assets/Directory_Seoul_BBQ.webp",
      },
      {
        name: "Bibimbap",
        description: "Mixed rice bowl with vegetables, meat, and gochujang sauce.",
        price: "IDR 95,000",
        image: "/Chope-R1/assets/Directory_Seoul_Bibimbap.jpg",
      },
      {
        name: "Kimchi Jjigae",
        description: "Spicy kimchi stew with pork and tofu.",
        price: "IDR 75,000",
        image: "/Chope-R1/assets/Directory_Seoul_Kimchi.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Café Botanica",
    rating: 4.4,
    reviews: 145,
    address: "Jl. Cipete Raya No.25, Cipete, Jakarta",
    image: "/Chope-R1/assets/CafeBotanica_Directory.jpeg",
    cuisine: ["Cafe", "Healthy"],
    location: "Cipete",
    price: 2,
    menu: [
      {
        name: "Acai Bowl",
        description: "Acai berry smoothie bowl topped with granola and fresh fruits.",
        price: "IDR 75,000",
        image: "/Chope-R1/assets/Directory_Cafe_Acai.jpeg",
      },
      {
        name: "Quinoa Salad",
        description: "Nutritious quinoa salad with roasted vegetables and tahini dressing.",
        price: "IDR 85,000",
        image: "/Chope-R1/assets/Directory_Cafe_Salad.jpg",
      },
      {
        name: "Cold Brew Coffee",
        description: "Smooth cold brew coffee served with oat milk.",
        price: "IDR 45,000",
        image: "/Chope-R1/assets/Directory_Cafe_Coffee.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "Steakhouse Prime",
    rating: 4.7,
    reviews: 178,
    address: "Jl. H.R. Rasuna Said, Kuningan, Jakarta",
    image: "/Chope-R1/assets/SteakHousePrime_Directory.jpg",
    cuisine: ["Steakhouse", "Western"],
    location: "Kuningan",
    price: 4,
    menu: [
      {
        name: "Wagyu Ribeye",
        description: "Premium wagyu ribeye steak grilled to perfection.",
        price: "IDR 650,000",
        image: "/Chope-R1/assets/Directory_Steak_Wagyu.jpg",
      },
      {
        name: "Lobster Thermidor",
        description: "Fresh lobster in creamy cognac sauce with cheese gratin.",
        price: "IDR 485,000",
        image: "/Chope-R1/assets/Directory_Steak_Lobster.jpeg",
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center and vanilla ice cream.",
        price: "IDR 95,000",
        image: "/Chope-R1/assets/Directory_Steak_Cake.webp",
      },
    ],
  },
  {
    id: 12,
    name: "Nasi Padang Sederhana",
    rating: 4.3,
    reviews: 267,
    address: "Jl. Sabang No.32, Menteng, Jakarta",
    image: "/Chope-R1/assets/NasiPadang_Directory.jpg",
    cuisine: ["Indonesian", "Padang"],
    location: "Menteng",
    price: 1,
    menu: [
      {
        name: "Rendang Daging",
        description: "Slow-cooked beef in rich coconut curry sauce.",
        price: "IDR 35,000",
        image: "/Chope-R1/assets/Directory_Padang_Rendang.jpg",
      },
      {
        name: "Ayam Pop",
        description: "Fried chicken with mild spices, Padang style.",
        price: "IDR 28,000",
        image: "/Chope-R1/assets/Directory_Padang_AyamPop.jpg",
      },
      {
        name: "Gulai Ikan",
        description: "Fish curry in turmeric and coconut milk broth.",
        price: "IDR 32,000",
        image: "/Chope-R1/assets/Directory_Padang_GulaiIkan.webp",
      },
    ],
  },
  {
    id: 13,
    name: "Mediterranean Breeze",
    rating: 4.5,
    reviews: 134,
    address: "Jl. Pondok Indah Mall, Pondok Indah, Jakarta",
    image: "/Chope-R1/assets/MediterraneanBreeze_Directory.jpg",
    cuisine: ["Mediterranean", "Healthy"],
    location: "Pondok Indah",
    price: 3,
    menu: [
      {
        name: "Grilled Lamb Souvlaki",
        description: "Marinated lamb skewers with tzatziki and pita bread.",
        price: "IDR 185,000",
        image: "/Chope-R1/assets/Directory_Breeze_Lamb.jpg",
      },
      {
        name: "Greek Salad",
        description: "Fresh tomatoes, olives, feta cheese with olive oil dressing.",
        price: "IDR 95,000",
        image: "/Chope-R1/assets/Directory_Breeze_Salad.jpeg",
      },
      {
        name: "Baklava",
        description: "Layers of phyllo pastry with nuts and honey syrup.",
        price: "IDR 65,000",
        image: "/Chope-R1/assets/Directory_Breeze_Baklava.jpg",
      },
    ],
  },
  {
    id: 14,
    name: "Ramen Ichiban",
    rating: 4.6,
    reviews: 201,
    address: "Jl. Senayan No.88, Senayan, Jakarta",
    image: "/Chope-R1/assets/Ichiban_Directory.jpg",
    cuisine: ["Japanese", "Ramen"],
    location: "Senayan",
    price: 2,
    menu: [
      {
        name: "Tonkotsu Ramen",
        description: "Rich pork bone broth with chashu, egg, and bamboo shoots.",
        price: "IDR 85,000",
        image: "/Chope-R1/assets/Directory_Ramen_Tonkotsu.jpeg",
      },
      {
        name: "Spicy Miso Ramen",
        description: "Spicy miso broth with ground pork and corn.",
        price: "IDR 88,000",
        image: "/Chope-R1/assets/Directory_Ramen_SpicyMiso.jpg",
      },
      {
        name: "Gyoza",
        description: "Pan-fried pork dumplings with dipping sauce.",
        price: "IDR 45,000",
        image: "/Chope-R1/assets/Directory_Ramen_Gyoza.jpeg",
      },
    ],
  },
  {
    id: 15,
    name: "Taco Libre",
    rating: 4.2,
    reviews: 156,
    address: "Jl. Kemang Utara No.15, Kemang, Jakarta",
    image: "/Chope-R1/assets/Taco_Directory.jpg",
    cuisine: ["Mexican", "Casual"],
    location: "Kemang",
    price: 2,
    menu: [
      {
        name: "Carnitas Tacos",
        description: "Slow-cooked pork tacos with onions and cilantro.",
        price: "IDR 75,000",
        image: "/Chope-R1/assets/Directory_Taco_Tacos.jpg",
      },
      {
        name: "Chicken Quesadilla",
        description: "Grilled tortilla with chicken, cheese, and peppers.",
        price: "IDR 85,000",
        image: "/Chope-R1/assets/Directory_Taco_Chicken.jpg",
      },
      {
        name: "Churros",
        description: "Fried dough pastry with cinnamon sugar and chocolate sauce.",
        price: "IDR 45,000",
        image: "/Chope-R1/assets/Directory_Taco_Churros.jpeg",
      },
    ],
  },
]

let filteredRestaurants = [...restaurants]

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing...")
  initializeFilters()
  loadRestaurants()
  setupModalEventListeners()
  setupFormSubmission()
})

// Initialize filter checkboxes
function initializeFilters() {
  console.log("Initializing filters...")
  populateCheckboxes("cuisineFilters", cuisines)
  populateCheckboxes("locationFilters", locations)
  populateCheckboxes("goodForFilters", goodForOptions)
  populateCheckboxes("othersFilters", othersOptions)
}

function populateCheckboxes(containerId, options) {
  const container = document.getElementById(containerId)
  if (!container) {
    console.error(`Container ${containerId} not found`)
    return
  }

  container.innerHTML = ""

  options.forEach((option) => {
    const checkboxItem = document.createElement("div")
    checkboxItem.className = "checkbox-item"
    checkboxItem.innerHTML = `
            <input type="checkbox" id="${option.toLowerCase().replace(/\s+/g, "-")}" value="${option}" onchange="applyFilters()">
            <label for="${option.toLowerCase().replace(/\s+/g, "-")}">${option}</label>
        `
    container.appendChild(checkboxItem)
  })
}

// Load and display restaurants
function loadRestaurants() {
  console.log("Loading restaurants...")
  const grid = document.getElementById("restaurantGrid")
  const loading = document.getElementById("loadingState")

  if (!grid || !loading) {
    console.error("Restaurant grid or loading element not found")
    return
  }

  // Show loading
  loading.style.display = "flex"

  // Simulate loading delay
  setTimeout(() => {
    loading.style.display = "none"
    displayRestaurants(filteredRestaurants)
  }, 1000)
}

function displayRestaurants(restaurantList) {
  const grid = document.getElementById("restaurantGrid")
  grid.innerHTML = ""

  restaurantList.forEach((restaurant) => {
    const card = createRestaurantCard(restaurant)
    grid.appendChild(card)
  })
}

function createRestaurantCard(restaurant) {
  const card = document.createElement("div")
  card.className = "restaurant-card"

  const stars = "★".repeat(Math.floor(restaurant.rating)) + (restaurant.rating % 1 !== 0 ? "☆" : "")

  card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
        <div class="restaurant-info">
            <h3 class="restaurant-name">${restaurant.name}</h3>
            <div class="restaurant-rating">
                <div class="stars">${stars}</div>
                <span class="rating-text">${restaurant.rating} (${restaurant.reviews} reviews)</span>
            </div>
            <p class="restaurant-address">${restaurant.address}</p>
            <div class="restaurant-actions">
                <button class="menu-btn" onclick="openMenuModal(${restaurant.id})">View Menu</button>
                <button class="book-btn" onclick="bookRestaurant(${restaurant.id})">Book Now</button>
            </div>
        </div>
    `

  return card
}

// Filter functions
function applyFilters() {
  const selectedCuisines = getSelectedValues("cuisineFilters")
  const selectedLocations = getSelectedValues("locationFilters")

  filteredRestaurants = restaurants.filter((restaurant) => {
    const cuisineMatch = selectedCuisines.length === 0 || restaurant.cuisine.some((c) => selectedCuisines.includes(c))
    const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(restaurant.location)

    return cuisineMatch && locationMatch
  })

  displayRestaurants(filteredRestaurants)
}

function getSelectedValues(containerId) {
  const container = document.getElementById(containerId)
  const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked')
  return Array.from(checkboxes).map((cb) => cb.value)
}

function clearCuisineFilters() {
  clearFilterGroup("cuisineFilters")
  applyFilters()
}

function clearLocationFilters() {
  clearFilterGroup("locationFilters")
  applyFilters()
}

function clearGoodForFilters() {
  clearFilterGroup("goodForFilters")
}

function clearOthersFilters() {
  clearFilterGroup("othersFilters")
}

function clearFilterGroup(containerId) {
  const container = document.getElementById(containerId)
  const checkboxes = container.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((cb) => (cb.checked = false))
}

// Update the openMenuModal function to create a carousel
function openMenuModal(restaurantId) {
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  if (!restaurant) return

  const modal = document.getElementById("menuModal")
  const title = document.getElementById("menuModalTitle")
  const menuItems = document.getElementById("menuItems")

  title.textContent = `${restaurant.name} - Menu`

  // Create carousel structure
  menuItems.innerHTML = `
    <div class="menu-carousel">
      <div class="carousel-container">
        <div class="carousel-slides" id="carouselSlides">
          ${restaurant.menu
            .map(
              (item, index) => `
            <div class="carousel-slide ${index === 0 ? "active" : ""}">
              <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="menu-item-content">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-description">${item.description}</div>
                <div class="menu-item-price">${item.price}</div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
        
        <button class="carousel-btn carousel-prev" onclick="previousSlide()">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-btn carousel-next" onclick="nextSlide()">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div class="carousel-indicators">
        ${restaurant.menu
          .map(
            (_, index) => `
          <button class="indicator ${index === 0 ? "active" : ""}" onclick="goToSlide(${index})"></button>
        `,
          )
          .join("")}
      </div>
    </div>
  `

  // Initialize carousel
  currentSlide = 0
  totalSlides = restaurant.menu.length

  modal.classList.add("show")
  document.body.style.overflow = "hidden"

  // Setup touch events after a short delay to ensure DOM is ready
  setTimeout(() => {
    setupCarouselTouchEvents()
  }, 100)
}

// Add carousel navigation variables and functions
let currentSlide = 0
let totalSlides = 0

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  updateCarousel()
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  updateCarousel()
}

function goToSlide(index) {
  currentSlide = index
  updateCarousel()
}

function updateCarousel() {
  const slides = document.querySelectorAll(".carousel-slide")
  const indicators = document.querySelectorAll(".indicator")

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide)
  })

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide)
  })

  const slidesContainer = document.getElementById("carouselSlides")
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`
}

// Add touch/swipe support
function setupCarouselTouchEvents() {
  const carousel = document.querySelector(".carousel-container")
  if (!carousel) return

  let startX = 0
  let isDragging = false

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX
    isDragging = true
  })

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return
    e.preventDefault()
  })

  carousel.addEventListener("touchend", (e) => {
    if (!isDragging) return

    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        nextSlide()
      } else {
        previousSlide()
      }
    }

    isDragging = false
  })

  // Mouse events for desktop
  carousel.addEventListener("mousedown", (e) => {
    startX = e.clientX
    isDragging = true
    carousel.style.cursor = "grabbing"
  })

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return
    e.preventDefault()
  })

  carousel.addEventListener("mouseup", (e) => {
    if (!isDragging) return

    const endX = e.clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        previousSlide()
      }
    }

    isDragging = false
    carousel.style.cursor = "grab"
  })

  carousel.addEventListener("mouseleave", () => {
    isDragging = false
    carousel.style.cursor = "grab"
  })
}

// Update the modal event listeners setup
function setupModalEventListeners() {
  // Close modals when clicking outside
  window.addEventListener("click", (event) => {
    const menuModal = document.getElementById("menuModal")
    const bookingModal = document.getElementById("bookingModal")
    const confirmationModal = document.getElementById("confirmationModal")

    if (event.target === menuModal) {
      closeMenuModal()
    }
    if (event.target === bookingModal) {
      closeBookingModal()
    }
    if (event.target === confirmationModal) {
      closeConfirmationModal()
    }
  })

  // Close modals with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenuModal()
      closeBookingModal()
      closeConfirmationModal()
    }

    // Add keyboard navigation for carousel
    if (document.getElementById("menuModal").classList.contains("show")) {
      if (event.key === "ArrowLeft") {
        previousSlide()
      } else if (event.key === "ArrowRight") {
        nextSlide()
      }
    }
  })
}

// Booking Modal Functions
function bookRestaurant(restaurantId) {
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  if (!restaurant) return

  const modal = document.getElementById("bookingModal")
  const restaurantNameInput = document.getElementById("restaurantName")

  restaurantNameInput.value = restaurant.name

  // Set minimum date to today
  const dateInput = document.getElementById("date")
  const today = new Date().toISOString().split("T")[0]
  dateInput.min = today

  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal")
  modal.classList.remove("show")
  document.body.style.overflow = "auto"

  // Reset form
  document.getElementById("bookingForm").reset()
}

// Confirmation Modal Functions
function openConfirmationModal(bookingData) {
  const modal = document.getElementById("confirmationModal")

  // Populate confirmation details
  document.getElementById("confirmRestaurant").textContent = bookingData.restaurant
  document.getElementById("confirmDate").textContent = formatDate(bookingData.date)
  document.getElementById("confirmTime").textContent = formatTime(bookingData.time)
  document.getElementById("confirmGuests").textContent = bookingData.guests
  document.getElementById("confirmBookingId").textContent = generateBookingId()

  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeConfirmationModal() {
  const modal = document.getElementById("confirmationModal")
  modal.classList.remove("show")
  document.body.style.overflow = "auto"
}

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":")
  const hour = Number.parseInt(hours)
  const ampm = hour >= 12 ? "PM" : "AM"
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

function generateBookingId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = "BK-"
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

function setupFormSubmission() {
  const bookingForm = document.getElementById("bookingForm")
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(bookingForm)
    const bookingData = {
      restaurant: formData.get("restaurantName"),
      guests: formData.get("guests"),
      date: formData.get("date"),
      time: formData.get("time"),
    }

    // Close booking modal
    closeBookingModal()

    // Open confirmation modal
    setTimeout(() => {
      openConfirmationModal(bookingData)
    }, 300)
  })
}

function closeMenuModal() {
  const modal = document.getElementById("menuModal")
  modal.classList.remove("show")
  document.body.style.overflow = "auto"
}
