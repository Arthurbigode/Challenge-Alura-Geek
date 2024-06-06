import { conectaApi } from "./conectaApi.js";

const listaDeProdutos = document.querySelector('[data-lista]');

function constroiCard(nome, preco, imagem) {
    const card = document.createElement('div');
    card.className = "card__container-line1";
    card.innerHTML = `
    <img class="card__img" src="${imagem}" alt="${nome}">
    <p class="card__text">${nome}</p>
    <div class="card__container__value">
    <p class="card__value">$ ${preco}</p>
    <img src="imagens/lixoLogo.png" alt="Ícono de eliminación">
    </div>
    `;

    return card;
}

async function listaImagens() {
    const listaApi = await conectaApi.listaImagens();
    listaApi.forEach(elemento => listaDeProdutos.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
}

listaImagens();