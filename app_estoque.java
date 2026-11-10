
import java.util.Scanner;

public class App_Estoque {

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        Estoque estoque = new Estoque();

        // Login
        System.out.println("ESTOQUE FACIL ");

        System.out.print("Login: ");
        String login = entrada.nextLine();

        System.out.print("Senha: ");
        String senha = entrada.nextLine();

        if (login.equals("admin") && senha.equals("1234")) {

            System.out.println("\nLogin realizado com sucesso!");

            int opcao = 0;

            while (opcao != 6) {

                System.out.println("\n MENU PRINCIPAL");
                System.out.println("1 - Listar produtos");
                System.out.println("2 - Cadastrar produto");
                System.out.println("3 - Atualizar produto");
                System.out.println("4 - Excluir produto");
                System.out.println("5 - Limpar tela");
                System.out.println("6 - Encerrar sistema");

                System.out.print("Escolha uma opção: ");
                opcao = Integer.parseInt(entrada.nextLine());

                switch (opcao) {

                    case 1:
                        estoque.listarProdutos();
                        break;

                    case 2:
                        System.out.print("Nome do produto: ");
                        String nome = entrada.nextLine();

                        estoque.cadastrarProduto(nome);
                        break;

                    case 3:
                        estoque.listarProdutos();

                        System.out.print("Número do produto: ");
                        int numeroAtualizar = Integer.parseInt(entrada.nextLine());

                        System.out.print("Novo nome: ");
                        String novoNome = entrada.nextLine();

                        estoque.atualizarProduto(numeroAtualizar, novoNome);
                        break;

                    case 4:
                        estoque.listarProdutos();

                        System.out.print("Número do produto que deseja excluir: ");
                        int numeroExcluir = Integer.parseInt(entrada.nextLine());

                        estoque.excluirProduto(numeroExcluir);
                        break;

                    case 5:
                        System.out.println("Menu atualizado.");
                        break;

                    case 6:
                        System.out.println("Sistema encerrado!");
                        break;

                    default:
                        System.out.println("Opção inválida!");
                }
            }

        } else {
            System.out.println("Login ou senha incorretos!");
        }

        entrada.close();
    }
}