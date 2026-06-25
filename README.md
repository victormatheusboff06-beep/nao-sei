

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class JogoControle extends JPanel implements KeyListener, ActionListener {
    // Posição e velocidade do JOGADOR (Verde)
    private int x = 150, y = 150;
    private int velX = 0, velY = 0;
    
    // Posição e velocidade do INIMIGO (Vermelho)
    private int inimigoX = 50, inimigoY = 50;
    private int inimigoVel = 2; // Velocidade da perseguição

    public JogoControle() {
        JFrame frame = new JFrame("Jogo com Inimigo");
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
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // Move o jogador
        x += velX;
        y += velY;
        
        // Lógica de Perseguição: O inimigo olha onde o jogador está e vai atrás
        if (inimigoX < x) inimigoX += inimigoVel;
        if (inimigoX > x) inimigoX -= inimigoVel;
        if (inimigoY < y) inimigoY += inimigoVel;
        if (inimigoY > y) inimigoY -= inimigoVel;
        
        // Lógica de Colisão (Se o inimigo encostar no jogador)
        Rectangle jogadorBox = new Rectangle(x, y, 40, 40);
        Rectangle inimigoBox = new Rectangle(inimigoX, inimigoY, 40, 40);
        
        if (jogadorBox.intersects(inimigoBox)) {
            // Reinicia as posições se houver colisão (Game Over simples)
            x = 150;
            y = 150;
            inimigoX = 50;
            inimigoY = 50;
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
