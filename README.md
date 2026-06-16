public class Exercicio19 {
    public static void main(String[] args) {
        // Altere os valores aqui para testar
        int a = 5;
        int b = 4;
        int c = 3;

        // Regra: a soma de dois lados nao pode ser menor que o terceiro
        if (a + b > c && a + c > b && b + c > a) {
            System.out.println("Os valores formam um triangulo.");
            System.out.println("Lados: a=" + a + ", b=" + b + ", c=" + c);
        } else {
            System.out.println("Nao formam triangulo.");
            System.out.println("Valores lidos: a=" + a + ", b=" + b + ", c=" + c);
        }
    }
}
