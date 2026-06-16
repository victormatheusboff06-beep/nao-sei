# nao-sei
import java.util.Scanner;

public class CalculadoraMedias {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // 1. Entrada das notas
        System.out.print("Digite a primeira nota: ");
        double nota1 = input.nextDouble();

        System.out.print("Digite a segunda nota: ");
        double nota2 = input.nextDouble();

        System.out.print("Digite a terceira nota: ");
        double nota3 = input.nextDouble();

        // 2. Apresentação do menu de opções
        System.out.println("\n--- Escolha o tipo de média ---");
        System.out.println("1 - Média Aritmética");
        System.out.println("2 - Média Ponderada (pesos 3, 3 e 4)");
        System.out.print("Digite a sua opção (1 ou 2): ");
        int opcao = input.nextInt();

        double mediaFinal = 0;
        boolean opcaoValida = true;

        // 3. Processamento da escolha com switch-case
        switch (opcao) {
            case 1:
                // Média Aritmética simples
                mediaFinal = (nota1 + nota2 + nota3) / 3;
                break;
            case 2:
                // Média Ponderada: (nota * peso) / soma dos pesos
                // Pesos: 3, 3 e 4 (Soma dos pesos = 10)
                mediaFinal = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10;
                break;
            default:
                System.out.println("\nErro: Opção inválida!");
                opcaoValida = false;
                break;
        }

        // 4. Exibição do resultado (apenas se a opção foi correta)
        if (opcaoValida) {
            System.out.printf("%nResultado da Média: %.2f%n", mediaFinal);
        }

        input.close();
    }
}
