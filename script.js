fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    const productList = document.getElementById('productList');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Rp ${product.price.toLocaleString('id-ID')}</p>
      `;
      productList.appendChild(card);
    });
  });
