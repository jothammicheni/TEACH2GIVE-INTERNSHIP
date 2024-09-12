document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            const tableBody = document.getElementById('productTableBody');
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>${product.category}</td>
                    <td>${product.stock}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});