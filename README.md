public class Exercicio25 {
    public static void main(String[] args) {
        // Altere os nomes e gols aqui para testar
        String time1 = "Time A";
        int golsTime1 = 3;

        String time2 = "Time B";
        int golsTime2 = 1;

        // Comparações simples de maior/menor
        if (golsTime1 > golsTime2) {
            System.out.println("Vencedor: " + time1);
        } else if (golsTime2 > golsTime1) {
            System.out.println("Vencedor: " + time2);
        } else {
            System.out.println("EMPATE");
        }
    }
}
