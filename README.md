public class Exercicio16 {
    public static void main(String[] args) {
        // Altere os valores aqui para testar
        int codigo = 6;
        int quantidade = 3;

        double precoUnitario = 0;

        // Switch básico para descobrir o preço por unidade
        switch (codigo) {
            case 5:
                precoUnitario = 32.00;
                break;
            case 6:
                precoUnitario = 45.00;
                break;
            case 2:
                precoUnitario = 37.00;
                break;
            case 12:
                precoUnitario = 44.00;
                break;
            default:
                System.out.println("Codigo de produto invalido!");
                break;
        }

        // Só calcula se o código existir na tabela
        if (precoUnitario > 0) {
            double precoTotal = precoUnitario * quantidade;
            System.out.println("Codigo do produto: " + codigo);
            System.out.println("Quantidade: " + quantidade);
            System.out.println("Preco Total: R$ " + precoTotal);
        }
    }
}
