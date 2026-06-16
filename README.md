public class CalculadoraMediasFixas {
    public static void main(String[] args) {
        // 1. Definição direta das notas (Altere os valores aqui para testar)
        double nota1 = 7.5;
        double nota2 = 8.0;
        double nota3 = 6.0;

        // Opção escolhida: 1 para Aritmética, 2 para Ponderada
        int opcao = 2; 

        double mediaFinal = 0;
        boolean opcaoValida = true;

        // 2. Processamento
        switch (opcao) {
            case 1:
                mediaFinal = (nota1 + nota2 + nota3) / 3;
                break;
            case 2:
                mediaFinal = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10;
                break;
            default:
                System.out.println("Erro: Opção inválida!");
                opcaoValida = false;
                break;
        }

        // 3. Exibição
        if (opcaoValida) {
            System.out.println("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
            System.out.println("Opção de média calculada: " + opcao);
            System.out.printf("Resultado da Média: %.2f%n", mediaFinal);
        }
    }
}
