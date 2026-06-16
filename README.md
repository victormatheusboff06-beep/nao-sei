public class Exercicio26 {
    public static void main(String[] args) {
        // Altere os valores aqui para testar (Considere idades diferentes)
        int homem1 = 25;
        int homem2 = 35;
        int mulher1 = 18;
        int mulher2 = 30;

        // Identifica o homem mais velho e o mais novo
        int homemVelho, homemNovo;
        if (homem1 > homem2) {
            homemVelho = homem1;
            homemNovo = homem2;
        } else {
            homemVelho = homem2;
            homemNovo = homem1;
        }

        // Identifica a mulher mais velha e a mais nova
        int mulherVelha, mulherNova;
        if (mulher1 > mulher2) {
            mulherVelha = mulher1;
            mulherNova = mulher2;
        } else {
            mulherVelha = mulher2;
            mulherNova = mulher1;
        }

        // Cálculos solicitados
        int soma = homemVelho + mulherNova;
        int produto = homemNovo * mulherVelha;

        // Exibição dos resultados
        System.out.println("Idade do homem mais velho: " + homemVelho);
        System.out.println("Idade da mulher mais nova: " + mulherNova);
        System.out.println("Soma (Homem Velho + Mulher Nova): " + soma);
        
        System.out.println("Idade do homem mais novo: " + homemNovo);
        System.out.println("Idade da mulher mais velha: " + mulherVelha);
        System.out.println("Produto (Homem Novo * Mulher Velha): " + produto);
    }
}
