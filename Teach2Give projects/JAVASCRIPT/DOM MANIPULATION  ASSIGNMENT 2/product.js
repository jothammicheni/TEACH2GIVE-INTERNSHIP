document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");
  const cartContainer = document.querySelector("#cart-container");
  const cart = document.querySelector(".cart");
  const logo = document.querySelector(".logo");
  const btnAbove = document.querySelector("#above35");
  const btnBelow = document.querySelector("#below35");
  const cartCost = document.querySelector("#cartCost");
  const cartItems = document.querySelector("#cart-items");
  const cartList = document.querySelector("#cart-list");

  // Cart array to hold the items added to cart
  let cartArray = [];
  let totalCartPrice = 0;

  // Fetch events from server
  fetch("http://localhost:3000/events")
    .then((res) => res.json())
    .then((data) => {
      // Function to render items in the container
      function renderItems(items) {
        container.innerHTML = ""; // Clear previous items
        items.map((item) => {
          const productHTML = `
            <div class='products'>
              <img id='image' src=${item.imageUrl} />
              <p>${item.title}</p>
              <p>${item.location}</p>
              <p>${item.company}</p>
              <p>$${item.price}</p>
              <button class="btnBuy" data-id="${item.id}">Buy now</button>
            </div>
          `;
          container.innerHTML += productHTML;
        });

        // Add event listeners for all the buy buttons
        const buyButtons = document.querySelectorAll(".btnBuy");
        buyButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            const itemId = event.target.getAttribute("data-id");
            const selectedItem = data.find((item) => item.id == itemId);

            cartArray.push(selectedItem);
            cartItems.innerHTML = cartArray.length;

            totalCartPrice = cartArray.reduce((prev, next) => prev + next.price, 0);
            cartCost.innerHTML = `$${totalCartPrice}`;

            renderCartItems();
          });
        });
      }

      function renderCartItems() {
        // Clear previous cart items
        cartList.innerHTML = "";

        cartArray.map((item, index) => {
          const cartItemHTML = `
            <div class='cart-item'>
              <img id='image' src=${item.imageUrl} />
              <p>${item.title}</p>
              <p>${item.location}</p>
              <p>${item.company}</p>
              <p>$${item.price}</p>
              <button class="btnRemove" data-index="${index}" style="width:150px;height:40px;border-radius:8px;margin-top:10px;background-color:red;border:none">Remove</button>
            </div>
          `;
          cartList.innerHTML += cartItemHTML;
        });

        // Add event listeners for the remove buttons
        const removeButtons = document.querySelectorAll(".btnRemove");
        removeButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            const itemIndex = event.target.getAttribute("data-index");
            cartArray.splice(itemIndex, 1); // Remove item from cart array
            cartItems.innerHTML = cartArray.length;

            // Recalculate total cart price
            totalCartPrice = cartArray.reduce((prev, next) => prev + next.price, 0);
            cartCost.innerHTML = `$${totalCartPrice}`;

            renderCartItems(); // Re-render the cart items
          });
        });
      }

      // Initially load all items
      renderItems(data);

      // Filter functions
      function filterItemsAbove() {
        const filteredItems = data.filter((item) => item.price >= 50);
        renderItems(filteredItems);
      }

      function filterItemsBelow() {
        const filteredItems = data.filter((item) => item.price < 50);
        renderItems(filteredItems);
      }

      // Button event listeners for filtering
      btnAbove.addEventListener("click", () => {
        filterItemsAbove();
      });

      btnBelow.addEventListener("click", () => {
        filterItemsBelow();
      });

      // Toggle between cartContainer and container views
      logo.addEventListener("click", () => {
        cartContainer.style.display = "none";
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
      });

      cart.addEventListener("click", () => {
        cartContainer.style.display = "block"; // Shows the cart
        container.style.display = "none"; // Hides the container
      });
    });
});
