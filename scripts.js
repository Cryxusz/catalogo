document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const catalog = document.querySelector('.product-catalog');
            data.perfumes.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;
                
                const productName = document.createElement('h2');
                productName.textContent = product.name;
                
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                
                const productPrice = document.createElement('span');
                productPrice.classList.add('price');
                productPrice.textContent = `$${product.price.toFixed(2)}`;
                
                productItem.appendChild(productImage);
                productItem.appendChild(productName);
                productItem.appendChild(productDescription);
                productItem.appendChild(productPrice);
                
                catalog.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});
