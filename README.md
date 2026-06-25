

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class JogoControle extends JPanel implements KeyListener, ActionListener {
    // Posição e velocidade do JOGADOR (Verde)
    private int x = 200, y = 200;
    private int velX = 0, velY = 0;
    
    // Posição e velocidade do INIMIGO (Vermelho)
    private int inimigoX = 30, inimigoY = 30;
    private int inimigoVel = 2;

    // Tempo de espera aumentado para 5 segundos (60 frames * 5 = 300)
    private int framesIniciais = 0;
    private final int ESPERA_TOTAL = 300;

    public JogoControle() {
        JFrame frame = new JFrame("Jogo com Atraso de 5 Segundos");
        frame.add(this);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        
        this.addKeyListener(this);
        this.setFocusable(true);
        
        Timer timer = new Timer(16, this);
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        // Fundo
        g.setColor(Color.BLACK);
        g.fillRect(0, 0, getWidth(), getHeight());
        
        // Desenha o Jogador (Verde)
        g.setColor(Color.GREEN);
        g.fillRect(x, y, 40, 40);
        
        // Desenha o Inimigo (Vermelho)
        g.setColor(Color.RED);
        g.fillRect(inimigoX, inimigoY, 40, 40);
        
        // Desenha a contagem regressiva na tela se ainda estiver no atraso inicial
        if (framesIniciais < ESPERA_TOTAL) {
            g.setColor(Color.WHITE);
            g.setFont(new Font("Arial", Font.BOLD, 20));
            int segundosRestantes = 5 - (framesIniciais / 60);
            g.drawString("Prepare-se! O inimigo move em: " + segundosRestantes, 30, 340);
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // O jogador já pode se mover livremente durante os 5 segundos para se posicionar
        x += velX;
        y += velY;
        
        // Controla o atraso de 5 segundos
        if (framesIniciais < ESPERA_TOTAL) {
            framesIniciais++;
            repaint();
            return; // Bloqueia o movimento do inimigo e a checagem de colisão por enquanto
        }
        
        // Lógica de Perseguição (Só roda após os 5 segundos)
        if (inimigoX < x) inimigoX += inimigoVel;
        if (inimigoX > x) inimigoX -= inimigoVel;
        if (inimigoY < y) inimigoY += inimigoVel;
        if (inimigoY > y) inimigoY -= inimigoVel;
        
        // Lógica de Colisão (Só roda após os 5 segundos)
        Rectangle jogadorBox = new Rectangle(x, y, 40, 40);
        Rectangle inimigoBox = new Rectangle(inimigoX, inimigoY, 40, 40);
        
        if (jogadorBox.intersects(inimigoBox)) {
            // Reseta tudo para a próxima partida
            x = 200;
            y = 200;
            inimigoX = 30;
            inimigoY = 30;
            velX = 0;
            velY = 0;
            framesIniciais = 0; 
            
            JOptionPane.showMessageDialog(this, "O inimigo te pegou! Tente novamente.");
        }
        
        repaint();
    }

    @Override
    public void keyPressed(KeyEvent e) {
        int codigo = e.getKeyCode();
        if (codigo == KeyEvent.VK_LEFT || codigo == KeyEvent.VK_A) velX = -5;
        if (codigo == KeyEvent.VK_RIGHT || codigo == KeyEvent.VK_D) velX = 5;
        if (codigo == KeyEvent.VK_UP || codigo == KeyEvent.VK_W) velY = -5;
        if (codigo == KeyEvent.VK_DOWN || codigo == KeyEvent.VK_S) velY = 5;
    }

    @Override
    public void keyReleased(KeyEvent e) {
        int codigo = e.getKeyCode();
        if (codigo == KeyEvent.VK_LEFT || codigo == KeyEvent.VK_RIGHT || codigo == KeyEvent.VK_A || codigo == KeyEvent.VK_D) velX = 0;
        if (codigo == KeyEvent.VK_UP || codigo == KeyEvent.VK_DOWN || codigo == KeyEvent.VK_W || codigo == KeyEvent.VK_S) velY = 0;
    }

    @Override
    public void keyTyped(KeyEvent e) {}

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new JogoControle());
    }
}
