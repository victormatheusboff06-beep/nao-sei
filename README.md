public class CreditoBancoFixo {
    public static void main(String[] args) {
        // 1. Definição direta do saldo médio (Altere aqui para testar)
        double saldoMedio = 450.00; 
        
        double percentual = 0;
        boolean saldoValido = true;

        // 2. Verificação das faixas de saldo
        if (saldoMedio >= 0 && saldoMedio <= 200) {
            percentual = 0.0;
        } else if (saldoMedio >= 201 && saldoMedio <= 400) {
            percentual = 0.20; 
        } else if (saldoMedio >= 401 && saldoMedio <= 600) {
            percentual = 0.30; 
        } else if (saldoMedio >= 601) {
            percentual = 0.40; 
        } else {
            System.out.println("Saldo inválido (menor que zero)!");
            saldoValido = false;
        }

        // 3. Cálculo e exibição (Só executa se o saldo for válido, sem usar return)
        if (saldoValido) {
            double valorCredito = saldoMedio * percentual;
            
            System.out.println("Saldo Médio do Cliente: R$ " + saldoMedio);
            System.out.println("Valor do Crédito Concedido: R$ " + valorCredito);
        }
    }
}
