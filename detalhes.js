const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
            .then(res => res.json())
            .then(product => {
                const productDetails = document.getElementById("productDetails");

                const productHtml = `
                        <div style="background-color: #F4FAFF">
                        <h2>${product.title}</h2>
                        <img src="${product.image}" alt="Imagem do Produto" class="w-50">
                        <p>Descrição: ${product.description}</p>
                        <p >Preço: RS$ ${product.price}</p>   
                        <a href="index.html" class="btn btn-primary mb-5">Voltar</a>
                    </div>
                `;

                productDetails.innerHTML = productHtml;
            })
            .catch(error => {
                console.error('Erro ao obter os detalhes do produto:', error);
            });