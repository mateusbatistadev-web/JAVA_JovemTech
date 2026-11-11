import PromptSync from "prompt-sync";
const prompt = PromptSync

let opcao: number;

console.log("\n Carrinho de compras")
console.log("1 - adicinar produto")
console.log("2 - Remover produto")
console.log("3 - Listar produtos")
console.log("0 - sair")

opcao = Number(prompt());

while(opcao !==0 ){
    if(opcao ==1){
        console.log("Produto adicionado")
    }else if(opcao ==2){
        console.log("produto removido")
    }
}