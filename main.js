fetch('https://diwserver.vps.webdock.cloud/products/category/Personal Care - Skin')
    .then(res => res.json())
    .then(data => {
        let str = '';
        data.products.forEach(product => {
            str += `<div class="card card-bottles me-3 mt-3">
            <img src="${product.image}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p>RS$ ${product.price}</p>
            <a href="detalhes.html?id=${product.id}" class="btn btn-primary">Detalhes</a>
            </div>
        </div>`
        });
        
        const sectionProducts = document.getElementById("exibeProdutos");
        sectionProducts.innerHTML = str;
    })

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    const termoBuscado = searchInput.value;
    retornaPesquisa(termoBuscado);
});

function retornaPesquisa(termoBuscado){
    fetch('https://diwserver.vps.webdock.cloud/products/category/' + termoBuscado)
        .then(res => res.json())
        .then(data => {
            searchResults.innerHTML = '';
            
            const searchResultsTittle = document.getElementById('searchResultsTittle');
            searchResultsTittle.innerHTML = '';

            const Encontrados = document.createElement('h1');
            Encontrados.classList.add('ms-3', 'text-secundary');
            Encontrados.textContent = 'Produtos Encontrados';
            searchResultsTittle.appendChild(Encontrados);

            data.products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('card', 'card-bottles', 'me-3', 'mt-3', 'ms-3');
                productItem.innerHTML = `
            <img src="${product.image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p>RS$ ${product.price}</p>
              <a href="detalhes.html?id=${product.id}" class="btn btn-primary">Detalhes</a>
            </div>
          `;
                searchResults.appendChild(productItem);
            });
            searchResultsTittle.scrollIntoView({ behavior: 'smooth' });
        });
}