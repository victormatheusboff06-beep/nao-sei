public class Exercicio18 {
    public static void main(String[] args) {
        // Altere os valores aqui para testar
        double salarioAntigo = 2000.00;
        int codigoCargo = 102;

        double percentualAumento = 0;

        // IFs básicos para checar o cargo
        if (codigoCargo == 101) {
            percentualAumento = 0.10; // 10%
        } else if (codigoCargo == 102) {
            percentualAumento = 0.20; // 20%
        } else if (codigoCargo == 103) {
            percentualAumento = 0.30; // 30%
        } else {
            percentualAumento = 0.40; // 40% para qualquer outro
        }

        double valorAumento = salarioAntigo * percentualAumento;
        double novoSalario = salarioAntigo + valorAumento;

        System.out.println("Salario Antigo: R$ " + salarioAntigo);
        System.out.println("Novo Salario: R$ " + novoSalario);
        System.out.println("Diferenca: R$ " + valorAumento);
    }
}
