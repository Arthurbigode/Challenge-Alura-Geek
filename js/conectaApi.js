async function listaImagens() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaImagem(nome, preco, imagem, id) {
    const conexao = await fetch("http://localhost:3000/produtos",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem,
            id: id
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletarProduto(id) {
    const url = `http://localhost:3000/produtos/${id}`;
    try {
      const resposta = await fetch(url, {
        method: "DELETE",
      });
      if(!resposta.ok){
        throw new Error(`Erro ao deletar o produto com ID: ${id}`);
      }
      } catch (error) {
          console.erro(`erro ao deletar o produto com ID: ${id}`, error);
          throw error;
      }
    }

export const conectaApi = {
    listaImagens,
    criaImagem,
    deletarProduto
}