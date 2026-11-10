
import java.util.ArrayList;

public class Estoque {

    ArrayList<String> produtos = new ArrayList<>();

   
    public Estoque() {
        produtos.add("Teclado");
        produtos.add("Mouse");
        produtos.add("Monitor");
    }

    public void listarProdutos() {
        System.out.println("\n PRODUTOS CADASTRADOS ");

        for (int i = 0; i < produtos.size(); i++) {
            System.out.println((i + 1) + " - " + produtos.get(i));
        }
    }

  
    public void cadastrarProduto(String nome) {
        produtos.add(nome);
        System.out.println("Produto cadastrado!");
    }

  
    public void atualizarProduto(int numero, String novoNome) {
        if (numero >= 1 && numero <= produtos.size()) {
            produtos.set(numero - 1, novoNome);
            System.out.println("Produto atualizado!");
        } else {
            System.out.println("Produto não encontrado!");
        }
    }

    public void excluirProduto(int numero) {
        if (numero >= 1 && numero <= produtos.size()) {
            produtos.remove(numero - 1);
            System.out.println("Produto excluído!");
        } else {
            System.out.println("Produto não encontrado!");
        }
    }
}