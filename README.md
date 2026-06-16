public class Exercicio22 {
    public static void main(String[] args) {
        // Altere os valores aqui para testar
        int i = 1; // 1 = Crescente, 2 = Decrescente, 3 = Maior no meio
        double a = 15.5;
        double b = 5.2;
        double c = 22.1;

        // Variaveis auxiliares para organizar os valores do menor para o maior
        double menor = 0, meio = 0, maior = 0;

        // Logica basica para descobrir quem é o menor, meio e maior
        if (a <= b && a <= c) {
            menor = a;
            if (b <= c) { meio = b; maior = c; } 
            else { meio = c; maior = b; }
        } else if (b <= a && b <= c) {
            menor = b;
            if (a <= c) { meio = a; maior = c; } 
            else { meio = c; maior = a; }
        } else {
            menor = c;
            if (a <= b) { meio = a; maior = b; } 
            else { meio = b; maior = a; }
        }

        System.out.println("Valores originais: a=" + a + ", b=" + b + ", c=" + c);

        // Executa a acao baseada no valor de i
        if (i == 1) {
            System.out.println("Ordem Crescente: " + menor + ", " + meio + ", " + maior);
        } else if (i == 2) {
            System.out.println("Ordem Decrescente: " + maior + ", " + meio + ", " + menor);
        } else if (i == 3) {
            System.out.println("Maior no meio: " + menor + ", " + maior + ", " + meio);
        } else {
            System.out.println("Codigo i invalido!");
        }
    }
}
