public class Exercicio24 {
    public static void main(String[] args) {
        // Altere o valor aqui para testar
        int quantidadeMacas = 15; 
        
        double precoPorMaca = 0;

        // Condição básica de quantidade
        if (quantidadeMacas < 12) {
            precoPorMaca = 1.30;
        } else {
            precoPorMaca = 1.00;
        }

        double custoTotal = quantidadeMacas * precoPorMaca;

        System.out.println("Quantidade de macas: " + quantidadeMacas);
        System.out.println("Custo total da compra: R$ " + custoTotal);
    }
}
