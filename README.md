public class Exercicio20 {
    public static void main(String[] args) {
        // Altere o valor em Reais aqui para testar
        int valorLido = 388; 
        
        int resto = valorLido;

        // Descobre a quantidade de cada nota usando divisao inteira e resto
        int notas100 = resto / 100;
        resto = resto % 100;

        int notas50 = resto / 50;
        resto = resto % 50;

        int notas10 = resto / 10;
        resto = resto % 10;

        int notas5 = resto / 5;
        resto = resto % 5;

        int notas1 = resto; // O que sobrou sao notas de 1

        System.out.println("Valor lido: R$ " + valorLido);
        System.out.println("Notas de 100: " + notas100);
        System.out.println("Notas de 50: " + notas50);
        System.out.println("Notas de 10: " + notas10);
        System.out.println("Notas de 5: " + notas5);
        System.out.println("Notas de 1: " + notas1);
    }
}
