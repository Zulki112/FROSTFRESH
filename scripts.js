/* =============================================
   PRODUCT DATA - Updated with all 8 images
   ============================================= */
const inventory = [
  {
    name: "Premium Salmon",
    price: "GH₵ 125.00",
    img: "salmon.jpeg",
    cat: "Seafood",
  },
  { name: "Jumbo Crab", price: "GH₵ 90.00", img: "crab.jpg", cat: "Seafood" },
  {
    name: "Beef Sausages",
    price: "GH₵ 55.00",
    img: "sausage.jpg",
    cat: "Processed",
  },
  {
    name: "Whole Chicken",
    price: "GH₵ 95.00",
    img: "frozen-whole-chicken.jpg",
    cat: "Poultry",
  },
  {
    name: "Fresh Tilapia",
    price: "GH₵ 48.00",
    img: "tilapia.jpg",
    cat: "Seafood",
  },
  { name: "Red Fish", price: "GH₵ 85.00", img: "red fish.jpg", cat: "Seafood" },
  {
    name: "Chicken Drumsticks",
    price: "GH₵ 65.00",
    img: "chicken drumsticks.jpg",
    cat: "Poultry",
  },
  {
    name: "Atlantic Salmon (V2)",
    price: "GH₵ 120.00",
    img: "salmon.jpg",
    cat: "Seafood",
  },
];

const grid = document.getElementById("product-grid");

if (grid) {
  inventory.forEach((item) => {
    grid.innerHTML += `
            <div class="p-card">
                <div class="p-badge">${item.cat}</div>
                <img src="${item.img}" alt="${item.name}">
                <div class="p-info">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <button onclick="order('${item.name}')">Order on WhatsApp</button>
                </div>
            </div>
        `;
  });
}

function order(name) {
  // Updated to your WhatsApp number: 0542700593
  window.open(
    "https://wa.me/233542700593?text=Hello FrostFresh, I want to order " + name,
    "_blank",
  );
}
