public class Exercicio27 {
    public static void main(String[] args) {
        // Altere os valores aqui para testar
        int numeroAluno = 12345;
        double nota1 = 8.5;
        double nota2 = 7.0;
        double nota3 = 9.0;
        double me = 8.0; // Média dos exercícios

        // Fórmula: MA = (Nota1 + Nota2 * 2 + Nota3 * 3 + ME) / 7
        double ma = (nota1 + (nota2 * 2) + (nota3 * 3) + me) / 7;

        // Identificação do Conceito por faixas
        char conceito;
        String mensagem;

        if (ma >= 9.0) {
            conceito = 'A';
            mensagem = "APROVADO";
        } else if (ma >= 7.5 && ma < 9.0) {
            conceito = 'B';
            mensagem = "APROVADO";
        } else if (ma >= 6.0 && ma < 7.5) {
            conceito = 'C';
            mensagem = "APROVADO";
        } else if (ma >= 4.0 && ma < 6.0) {
            conceito = 'D';
            mensagem = "REPROVADO";
        } else {
            conceito = 'E';
            mensagem = "REPROVADO";
        }

        // Exibição de todos os dados exigidos pelo enunciado
        System.out.println("Numero do aluno: " + numeroAluno);
        System.out.println("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
        System.out.println("Media dos exercicios (ME): " + me);
        System.out.println("Media de aproveitamento (MA): " + ma);
        System.out.println("Conceito correspondente: " + conceito);
        System.out.println("Status final: " + mensagem);
    }
}
