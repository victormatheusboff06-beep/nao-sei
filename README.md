public class Exercicio21 {
    public static void main(String[] args) {
        // Altere as horas aqui para testar (Formato 24h)
        int horaInicio = 22;
        int horaFinal = 6;

        int duracao;

        if (horaFinal > horaInicio) {
            // Jogo terminou no mesmo dia
            duracao = horaFinal - horaInicio;
        } else if (horaFinal < horaInicio) {
            // Jogo terminou no dia seguinte
            duracao = (24 - horaInicio) + horaFinal;
        } else {
            // Se as horas forem iguais, durou o tempo maximo de 24 horas
            duracao = 24;
        }

        System.out.println("Hora de inicio: " + horaInicio + "h");
        System.out.println("Hora de termino: " + horaFinal + "h");
        System.out.println("Duracao do jogo: " + duracao + " horas");
    }
}
