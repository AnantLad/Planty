// Sample product data
const products = {
    "outdoor-plant": {
        name: "Outdoor plants",
        items:[
            {
            name: "Red Flower Pod",
            image: "image/f1.png",
            description: "A beautiful red flower pod with ceramic base.",
            price: "$10"
        },
        {
            name: "Yellow Flower Pod",
            image: "image/f4.jpg",
            description: "A bright and cheerful yellow flower pod.",
            price: "$12"
        },
        {
            name: "Mixed Flower Pod",
            image: "image/f3.jpg",
            description: "A colorful blend of multiple flowers in a pod.",
            price: "$15"
        }]
        
    }};
//     2: {
//         name: "Exclusive Plant",
//         image: "image/f3.jpg",
//         description: "Rare and beautiful indoor plant. Low maintenance and air purifying.",
//         price: "$25"
//     },
//     3: {
//         name: "Flower Pod",
//         image: "image/f1.png",
//         description: "Elegant flower pod for home decor with vibrant blooms.",
//         price: "$15"
//     },
//     4: {
//         name: "Flower Pod",
//         image: "image/f4.jpg",
//         description: "Colorful and fresh flower pod, ideal as a gift or decoration.",
//         price: "$18"
//     }
// };

// // Get product ID from URL
// const param = new URLSearchParams(window.location.search);
// const id = params.get('id');
// const product = products[id];

// // Render product details
// if (product) {
//     const container = document.getElementById('product-details');
//     container.innerHTML = `
//         <h1>${product.name}</h1>
//         <img src="${product.image}" alt="${product.name}" class="product-image">
//         <p>${product.description}</p>
//         <p><strong>Price:</strong> ${product.price}</p>
//         <a href="plant.html">← Back to Home</a>
//     `;
// } else {
//     document.getElementById('product-details').innerHTML = `<p>Product not found.</p>`;
// }
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const productGroup = products[id];

if (productGroup) {
    const container = document.getElementById('product-details');
    container.innerHTML = `<h1>${productGroup.name}</h1><div class="product-group"></div>`;

    const groupContainer = container.querySelector('.product-group');

    productGroup.items.forEach(item => {
        groupContainer.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}" class="product-image">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>${item.price}</strong></p>
            </div>
        `;
    });
} else {
    document.getElementById('product-details').innerHTML = `<p>Product collection not found.</p>`;
}

