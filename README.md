import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        String[] nomes = new String[5];
        double[] salarios = new double[5];
        int[] tempo = new int[5];

        // Preenchendo os vetores
        for (int i = 0; i < 5; i++) {
            System.out.print("Digite o nome do funcionário: ");
            nomes[i] = entrada.nextLine();

            System.out.print("Digite o salário: R$ ");
            salarios[i] = entrada.nextDouble();

            System.out.print("Digite o tempo de serviço: ");
            tempo[i] = entrada.nextInt();

            entrada.nextLine(); // Limpa o ENTER
        }

        // Primeiro relatório
        System.out.println("\n=== FUNCIONÁRIOS SEM AUMENTO ===");

        for (int i = 0; i < 5; i++) {
            if (tempo[i] <= 5 && salarios[i] >= 1940) {
                System.out.println(nomes[i]);
            }
        }

        // Segundo relatório
        System.out.println("\n=== FUNCIONÁRIOS COM AUMENTO ===");

        for (int i = 0; i < 5; i++) {

            if (tempo[i] > 5 && salarios[i] < 1940) {
                // As duas condições: 35%
                salarios[i] = salarios[i] * 1.35;

                System.out.printf("%s - Novo salário: R$ %.2f%n",
                        nomes[i], salarios[i]);

            } else if (tempo[i] > 5) {
                // Apenas tempo de serviço: 25%
                salarios[i] = salarios[i] * 1.25;

                System.out.printf("%s - Novo salário: R$ %.2f%n",
                        nomes[i], salarios[i]);

            } else if (salarios[i] < 1940) {
                // Apenas salário: 15%
                salarios[i] = salarios[i] * 1.15;

                System.out.printf("%s - Novo salário: R$ %.2f%n",
                        nomes[i], salarios[i]);
            }
        }

        entrada.close();
    }
}
