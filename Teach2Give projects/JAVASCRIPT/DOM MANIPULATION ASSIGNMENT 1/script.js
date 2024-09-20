document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const btnPriceAsc = document.querySelector("#filterPriceAsc");
    const btnPriceDesc = document.querySelector("#filterPriceDesc");
    const btnDateAsc = document.querySelector("#filterDateAsc");
    const btnDateDesc = document.querySelector("#filterDateDesc");

    let eventsData = [];
    let favorites = [];

    // Caching previously fetched data
    function fetchData() {
        return new Promise((resolve, reject) => {
            if (eventsData.length > 0) {
                resolve(eventsData); // Return cached data
            } else {
                fetch("http://localhost:3000/events")
                    .then(response => response.json())
                    .then(data => {
                        eventsData = data; // Cache data
                        resolve(data);
                    })
                    .catch(error => reject(error));
            }
        });
    }

    // Lazy load images
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll("img.lazy");
        lazyImages.forEach((img) => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        img.src = img.dataset.src;
                        img.classList.remove("lazy");
                        observer.disconnect();
                    }
                });
            });
            observer.observe(img);
        });
    }

    // Function to render event items
    function renderItems(items) {
        container.innerHTML = ""; // Clear container
        items.map((item) => {
            const isFavorite = favorites.includes(item.id) ? "Remove from Favorites" : "Add to Favorites";
            const eventHTML = `
                <div class="products">
                    <img id="image" class="lazy" data-src="${item.imageUrl}" alt="Event Image" />
                    <p>${item.title}</p>
                    <p>${item.location}</p>
                    <p>${new Date(item.date).toLocaleDateString()}</p>
                    <p>$${item.price}</p>
                    <button class="btnFavorite" data-id="${item.id}">${isFavorite}</button>
                </div>
            `;
            container.innerHTML += eventHTML;
        });

        // Lazy load images after rendering
        lazyLoadImages();

        // Add favorite event functionality
        document.querySelectorAll(".btnFavorite").forEach((button) => {
            button.addEventListener("click", (event) => {
                const eventId = event.target.getAttribute("data-id");
                toggleFavorite(eventId);
            });
        });
    }

    // Toggle favorite event
    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
        } else {
            favorites.push(id);
        }
        renderItems(eventsData);
    }

    // Sort events by price or date
    function sortEventsBy(key, asc = true) {
        const sortedData = [...eventsData].sort((a, b) => {
            if (asc) return a[key] - b[key];
            return b[key] - a[key];
        });
        renderItems(sortedData);
    }

    // Event listeners for sorting
    btnPriceAsc.addEventListener("click", () => sortEventsBy("price", true));
    btnPriceDesc.addEventListener("click", () => sortEventsBy("price", false));
    btnDateAsc.addEventListener("click", () => sortEventsBy("date", true));
    btnDateDesc.addEventListener("click", () => sortEventsBy("date", false));

    // Initial data fetch and render
    fetchData()
        .then((data) => renderItems(data))
        .catch(error => console.error("Failed to fetch events:", error));
});
