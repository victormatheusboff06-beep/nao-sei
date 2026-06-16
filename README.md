public class Exercicio23 {
    public static void main(String[] args) {
        // Altere os horarios aqui para testar
        int horaInicio = 22;
        int minInicio = 30;
        
        int horaFinal = 1;
        int minFinal = 15;

        // Transforma tudo para a menor unidade (minutos totais desde o inicio do dia)
        int tempoInicioMinutos = (horaInicio * 60) + minInicio;
        int tempoFinalMinutos = (horaFinal * 60) + minFinal;

        int duracaoTotalMinutos;

        if (tempoFinalMinutos >= tempoInicioMinutos) {
            // Terminou no mesmo dia
            duracaoTotalMinutos = tempoFinalMinutos - tempoInicioMinutos;
        } else {
            // Terminou no dia seguinte (soma os minutos de um dia inteiro = 1440)
            duracaoTotalMinutos = (1440 - tempoInicioMinutos) + tempoFinalMinutos;
        }

        // Se deu exatamente 0 minutos de diferenca, significa que durou 24h inteiras
        if (duracaoTotalMinutos == 0) {
            duracaoTotalMinutos = 1440;
        }

        // Converte de volta para horas e minutos usando divisao basica
        int horasDuracao = duracaoTotalMinutos / 60;
        int minutosDuracao = duracaoTotalMinutos % 60;

        System.out.println("Duracao total: " + horasDuracao + " horas e " + minutosDuracao + " minutos.");
    }
}
