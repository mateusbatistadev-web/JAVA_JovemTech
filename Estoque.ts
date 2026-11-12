
let produtos: string[] = [];
let Apagados_Atualizados: string[] = []

export class Estoque {

    listarProdutos(): void {
        console.log("\nPRODUTOS CADASTRADOS");

        for (let i = 0; i < produtos.length; i++) {
            console.log((i + 1) + " - " + produtos[i]);
        }

        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado!");
        }
    }

    cadastrarProduto(nome: string): void {
        produtos.push(nome);
        console.log("Produto cadastrado!")
        produtos.push()    ;
    }

    atualizarProduto(numero: number, novoNome: string): void {
        if (numero >= 1 && numero <= produtos.length) {
            produtos[numero - 1] = novoNome;
            console.log("Produto atualizado!");
        } else {
            console.log("Produto não encontrado!");
        }


    }

    excluirProduto(numero: number): void {
        if (numero >= 1 && numero <= produtos.length) {
            produtos.splice(numero - 1, 1);
            console.log("Produto excluído!");
        } else {
            console.log("Produto não encontrado!");
        }
    }
}
