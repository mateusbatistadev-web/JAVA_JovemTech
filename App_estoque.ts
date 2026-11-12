
import promptSync from 'prompt-sync';
import { Estoque } from "./Estoque.ts";

const prompt = promptSync();

class App_Estoque {

    public static main(): void {

        const estoque = new Estoque();

        console.log("ESTOQUE FACIL");

        console.log("Login:");
        let login: string = prompt("");

        console.log("Senha:");
        let senha: string = prompt("");
        

        console.log("Digite sua ContraSenha:");
        let Contra_senha: string = prompt("");

        if (login === "admin" && senha === "1234") {

            console.log("\nLogin realizado com sucesso!");
            console.log(login);

            let opcao: number = 0;

            while (opcao !== 6) {

                console.log("\nMENU PRINCIPAL");
                console.log("1 - Listar produtos");
                console.log("2 - Cadastrar produto");
                console.log("3 - Atualizar produto");
                console.log("4 - Excluir produto");
                console.log("5 - Limpar tela");
                console.log("6 - Encerrar sistema");

                opcao = Number(prompt("Escolha uma opção: "));

                if (opcao === 1) {

                    estoque.listarProdutos();

                } else if (opcao === 2) {
                     if (Contra_senha === "1234") {
                         console.log("\nLogin realizado com sucesso!")}else{
                            console.log("senha incorreta")
                         }
                         
                    let nome: string = prompt("Nome do produto: ");

                    estoque.cadastrarProduto(nome);

                } else if (opcao === 3) {

                    estoque.listarProdutos();

                    if (Contra_senha === "1234") {
                         console.log("\nLogin realizado com sucesso!")}else{
                            console.log("senha incorreta")
                         }
                         
                    let numeroAtualizar: number =
                        Number(prompt("Número do produto: "));

                    let novoNome: string =
                        prompt("Novo nome: ");

                    estoque.atualizarProduto(numeroAtualizar, novoNome);

                } else if (opcao === 4) {

                    estoque.listarProdutos();

                    let numeroExcluir: number =
                        Number(prompt("Número do produto que deseja excluir: "));

                    estoque.excluirProduto(numeroExcluir);

                } else if (opcao === 5) {

                    console.clear();
                    console.log("Tela limpa!");

                } else if (opcao === 6) {

                    console.log("Sistema encerrado!");

                }else if (opcao === 7){
                     console
                } else {

                    console.log("Opção inválida!");

                }
            }

        } else {

            console.log("Login ou senha incorretos!");

        }
    }
}

App_Estoque.main();
