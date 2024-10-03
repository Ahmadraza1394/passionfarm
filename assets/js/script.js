// ------------------FOR TYPE CATEGORY1 SECTION------------------
// document.addEventListener("DOMContentLoaded", function () {
//   // Select necessary elements
//   const carouselItems1 = document.getElementById("carouselItems1");
//   const nextBtn1 = document.getElementById("nextBtn1");
//   const prevBtn1 = document.getElementById("prevBtn1");

//   let currentIndex1 = 0;
//   let cardWidth = 0; // Will be calculated dynamically
//   let totalItems1 = 0; // Will be set after fetching the data

//   // Function to fetch and load products from JSON file
//   function loadProducts() {
//     fetch("./assets/data/categoryOne.json") // Path to your JSON file
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((products) => {
//         // Inject product data into the carousel
//         products.forEach((product) => {
//           const productCard = `
//         <div class="w-96 md:w-1/6 p-4 flex-none">
//           <div class="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col h-full">
//             <div class="mb-4">
//               <img src="${product.image}" alt="${product.name}" class="mx-auto w-20 h-20 object-contain">
//             </div>
//             <p class="font-bold text-yellow-600 mb-4">${product.price}</p>
//             <h3 class="font-bold mb-2">${product.name}</h3>
//             <p class="text-gray-500 text-xs mb-1">${product.brand}</p>
//             <p class="text-xs text-gray-700 mb-2">${product.type} • THC: ${product.thc} • CBD: ${product.cbd}</p>
//             <div class="mt-auto">
//               <button class="bg-orange-100 hover:bg-orange-500 text-yellow-600 py-2 px-2 rounded-lg transition-colors duration-300">
//                 ADD TO CART
//               </button>
//             </div>
//           </div>
//         </div>
//       `;
//           carouselItems1.innerHTML += productCard; // Append product cards
//         });

//         // After loading the products, update the total number of items
//         totalItems1 = products.length;

//         // Update card width after content is rendered
//         updateCardWidth();

//         // Set the carousel position based on the current index
//         updateCarouselPosition();
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }

//   // Function to update the card width dynamically
//   function updateCardWidth() {
//     cardWidth = document.querySelector(".md\\:w-1\\/6").offsetWidth;
//   }

//   // Function to update the carousel position based on the current index
//   function updateCarouselPosition() {
//     carouselItems1.style.transform = `translateX(-${
//       currentIndex1 * cardWidth
//     }px)`;
//   }

//   // Event listener for the Next button
//   nextBtn1.addEventListener("click", () => {
//     if (currentIndex1 < totalItems1 - 1) {
//       currentIndex1++;
//     } else {
//       currentIndex1 = 0; // Loop back to the first item
//     }
//     updateCarouselPosition();
//   });

//   // Event listener for the Previous button
//   prevBtn1.addEventListener("click", () => {
//     if (currentIndex1 > 0) {
//       currentIndex1--;
//     } else {
//       currentIndex1 = totalItems1 - 1; // Loop back to the last item
//     }
//     updateCarouselPosition();
//   });

//   // Ensure the carousel adjusts properly on window resize
//   window.addEventListener("resize", () => {
//     updateCardWidth(); // Recalculate card width
//     updateCarouselPosition(); // Re-adjust the carousel position
//   });

//   // Call the function to load products
//   loadProducts();
// });

// ------------------FOR TYPE CATEGORY2 SECTION------------------
// document.addEventListener("DOMContentLoaded", function () {
//   // Select necessary elements
//   const carouselItems2 = document.getElementById("carouselItems2");
//   const nextBtn2 = document.getElementById("nextBtn2");
//   const prevBtn2 = document.getElementById("prevBtn2");

//   let currentIndex2 = 0;
//   let cardWidth = 0; // Will be calculated dynamically
//   let totalItems2 = 0; // Will be set after fetching the data

//   // Function to fetch and load products from JSON file
//   function loadProducts() {
//     fetch("./assets/data/categoryTwo.json") // Path to your JSON file
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((products) => {
//         // Inject product data into the carousel
//         products.forEach((product) => {
//           const productCard = `
//           <div class="w-96 md:w-1/6 p-4 flex-none">
//             <div class="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col h-full">
//               <div class="mb-4">
//                 <img src="${product.image}" alt="${product.name}" class="mx-auto w-20 h-20 object-contain">
//               </div>
//               <p class="font-bold text-yellow-600 mb-4">${product.price}</p>
//               <h3 class="font-bold mb-2">${product.name}</h3>
//               <p class="text-gray-500 text-xs mb-1">${product.brand}</p>
//               <p class="text-xs text-gray-700 mb-2">${product.type} • THC: ${product.thc} • CBD: ${product.cbd}</p>
//               <div class="mt-auto">
//                 <button class="bg-orange-100 hover:bg-orange-500 text-yellow-600 py-2 px-2 rounded-lg transition-colors duration-300">
//                   ADD TO CART
//                 </button>
//               </div>
//             </div>
//           </div>
//         `;
//           carouselItems2.innerHTML += productCard; // Append product cards
//         });

//         // After loading the products, update the total number of items
//         totalItems2 = products.length;

//         // Update card width after content is rendered
//         updateCardWidth();

//         // Set the carousel position based on the current index
//         updateCarouselPosition();
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }

//   // Function to update the card width dynamically
//   function updateCardWidth() {
//     cardWidth = document.querySelector(".md\\:w-1\\/6").offsetWidth;
//   }

//   // Function to update the carousel position based on the current index
//   function updateCarouselPosition() {
//     carouselItems2.style.transform = `translateX(-${
//       currentIndex2 * cardWidth
//     }px)`;
//   }

//   // Event listener for the Next button
//   nextBtn2.addEventListener("click", () => {
//     if (currentIndex2 < totalItems2 - 1) {
//       currentIndex2++;
//     } else {
//       currentIndex2 = 0; // Loop back to the first item
//     }
//     updateCarouselPosition();
//   });

//   // Event listener for the Previous button
//   prevBtn2.addEventListener("click", () => {
//     if (currentIndex2 > 0) {
//       currentIndex2--;
//     } else {
//       currentIndex2 = totalItems2 - 1; // Loop back to the last item
//     }
//     updateCarouselPosition();
//   });

//   // Ensure the carousel adjusts properly on window resize
//   window.addEventListener("resize", () => {
//     updateCardWidth(); // Recalculate card width
//     updateCarouselPosition(); // Re-adjust the carousel position
//   });

//   // Call the function to load products
//   loadProducts();
// });

// ------------------FOR TYPE CATEGORY3 SECTION------------------
// document.addEventListener("DOMContentLoaded", function () {
//   // Select necessary elements
//   const carouselItems3 = document.getElementById("carouselItems3");
//   const nextBtn3 = document.getElementById("nextBtn3");
//   const prevBtn3 = document.getElementById("prevBtn3");

//   let currentIndex3 = 0;
//   let cardWidth = 0; // Will be calculated dynamically
//   let totalItems3 = 0; // Will be set after fetching the data

//   // Function to fetch and load products from JSON file
//   function loadProducts() {
//     fetch("./assets/data/categoryThree.json") // Path to your JSON file
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((products) => {
//         // Inject product data into the carousel
//         products.forEach((product) => {
//           const productCard = `
//             <div class="w-96 md:w-1/6 p-4 flex-none">
//               <div class="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col h-full">
//                 <div class="mb-4">
//                   <img src="${product.image}" alt="${product.name}" class="mx-auto w-20 h-20 object-contain">
//                 </div>
//                 <p class="font-bold text-yellow-600 mb-4">${product.price}</p>
//                 <h3 class="font-bold mb-2">${product.name}</h3>
//                 <p class="text-gray-500 text-xs mb-1">${product.brand}</p>
//                 <p class="text-xs text-gray-700 mb-2">${product.type} • THC: ${product.thc} • CBD: ${product.cbd}</p>
//                 <div class="mt-auto hover:bg-orange-500">
//                   <button class="bg-orange-100 hover:bg-orange-400  text-yellow-600 py-2 px-2 rounded-lg transition-colors duration-300">
//                     ADD TO CART
//                   </button>
//                 </div>
//               </div>
//             </div>
//           `;
//           carouselItems3.innerHTML += productCard; // Append product cards
//         });

//         // After loading the products, update the total number of items
//         totalItems3 = products.length;

//         // Update card width after content is rendered
//         updateCardWidth();

//         // Set the carousel position based on the current index
//         updateCarouselPosition();
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }

//   // Function to update the card width dynamically
//   function updateCardWidth() {
//     cardWidth = document.querySelector(".md\\:w-1\\/6").offsetWidth;
//   }

//   // Function to update the carousel position based on the current index
//   function updateCarouselPosition() {
//     carouselItems3.style.transform = `translateX(-${
//       currentIndex3 * cardWidth
//     }px)`;
//   }

//   // Event listener for the Next button
//   nextBtn3.addEventListener("click", () => {
//     if (currentIndex3 < totalItems3 - 1) {
//       currentIndex3++;
//     } else {
//       currentIndex3 = 0; // Loop back to the first item
//     }
//     updateCarouselPosition();
//   });

//   // Event listener for the Previous button
//   prevBtn3.addEventListener("click", () => {
//     if (currentIndex3 > 0) {
//       currentIndex3--;
//     } else {
//       currentIndex3 = totalItems3 - 1; // Loop back to the last item
//     }
//     updateCarouselPosition();
//   });

//   // Ensure the carousel adjusts properly on window resize
//   window.addEventListener("resize", () => {
//     updateCardWidth(); // Recalculate card width
//     updateCarouselPosition(); // Re-adjust the carousel position
//   });

//   // Call the function to load products
//   loadProducts();
// });

// -----------------------FOR CATEGORY SECTION ----------------
// const carouselItems = document.getElementById("carousel-items");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// const totalItems = document.querySelectorAll("#carousel-items > div").length;
// const itemWidth = document.querySelector("#carousel-items > div").offsetWidth;
let currentIndex = 1; // Start at the real first item
const totalVisibleItems = 5; // Adjust based on how many visible items at once

// Initialize carousel to show the first real item (skip the duplicated first item)
// carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

// nextBtn.addEventListener("click", () => {
//   if (currentIndex < totalItems - 1) {
//     currentIndex++;
//     carouselItems.style.transform = `translateX(-${
//       currentIndex * itemWidth
//     }px)`;
//   }

//   // If it's the last duplicated item, reset to the first real item
//   if (currentIndex === totalItems - 1) {
//     setTimeout(() => {
//       carouselItems.style.transition = "none"; // Disable smooth transition
//       currentIndex = 1; // Jump to the real first item
//       carouselItems.style.transform = `translateX(-${
//         currentIndex * itemWidth
//       }px)`;
//       setTimeout(() => {
//         carouselItems.style.transition = "transform 0.5s ease-in-out"; // Re-enable smooth transition
//       }, 50); // Small delay to avoid a flicker
//     }, 500); // Wait for the animation to finish
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     carouselItems.style.transform = `translateX(-${
//       currentIndex * itemWidth
//     }px)`;
//   }

//   // If it's the first duplicated item, reset to the last real item
//   if (currentIndex === 0) {
//     setTimeout(() => {
//       carouselItems.style.transition = "none"; // Disable smooth transition
//       currentIndex = totalItems - 2; // Jump to the last real item
//       carouselItems.style.transform = `translateX(-${
//         currentIndex * itemWidth
//       }px)`;
//       setTimeout(() => {
//         carouselItems.style.transition = "transform 0.5s ease-in-out"; // Re-enable smooth transition
//       }, 50); // Small delay to avoid a flicker
//     }, 500); // Wait for the animation to finish
//   }
// });

// Ensure responsive adjustment when window resizes
// window.addEventListener("resize", () => {
//   carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// });

// <!------------------  SEARCH INPUT IN NAVBAR --------------------------->
document.getElementById("search-toggle").addEventListener("click", function () {
  const searchInput = document.getElementById("search-input");
  searchInput.classList.toggle("hidden");
});

// <!-- ---------------FOR HAMBURGER SECTION --------------------->
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeButton = document.querySelector(".close-button");

// Toggle mobile menu and hide/show navbar
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  navbar.classList.toggle("hidden"); // Hide the navbar when mobile menu is open
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-times");
});

// Close menu when clicking the cross button
closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  navbar.classList.remove("hidden"); // Show the navbar when mobile menu is closed
  hamburgerIcon.classList.add("fa-bars");
  hamburgerIcon.classList.remove("fa-times");
});

// <!----------------- IMAGE GALLERY MODAL ----------------- -->

function openImageModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = element.src;
  modal.classList.remove("hidden");
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
}

// <!----------------FOR FAQ TOGGLE  ----------------------->
function toggleFAQ(faqNumber) {
  const answer = document.getElementById("faq" + faqNumber);
  const otherAnswers = document.querySelectorAll(".faq-answer");
  const icon = answer.previousElementSibling.querySelector(".faq-icon");
  const isOpen = !answer.classList.contains("hidden");

  // Close all answers
  otherAnswers.forEach((answer) => answer.classList.add("hidden"));

  // Toggle the clicked answer
  if (isOpen) {
    answer.classList.add("hidden");
    icon.textContent = "⌄"; // Arrow down
  } else {
    answer.classList.remove("hidden");
    icon.textContent = "⌃"; // Arrow up
  }
}

//
