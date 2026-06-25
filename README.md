import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class JogoExemplo extends JPanel implements KeyListener, ActionListener {
    // Posição e velocidade do personagem
    int x = 100, y = 100;
    int velX = 0, velY = 0;
    
    public JogoExemplo() {
        JFrame frame = new JFrame("Exemplo de Controle em Java");
        frame.add(this);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        
        // Adiciona os detectores de teclado e foco
        this.addKeyListener(this);
        this.setFocusable(true);
        
        // Timer para atualizar o jogo (60 FPS)
        Timer timer = new Timer(16, this);
        timer.start();
    }

    // Método que desenha o jogo
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillRect(x, y, 50, 50); // Desenha o quadrado
    }

    // Chamado periodicamente pelo Timer (Game Loop)
    public void actionPerformed(ActionEvent e) {
        x += velX;
        y += velY;
        repaint(); // Atualiza a tela
    }

    // Detecta quando uma tecla é pressionada
    public void keyPressed(KeyEvent e) {
        int codigo = e.getKeyCode();
        
        if (codigo == KeyEvent.VK_LEFT) velX = -5;
        if (codigo == KeyEvent.VK_RIGHT) velX = 5;
        if (codigo == KeyEvent.VK_UP) velY = -5;
        if (codigo == KeyEvent.VK_DOWN) velY = 5;
    }

    // Detecta quando a tecla é solta (para parar o movimento)
    public void keyReleased(KeyEvent e) {
        int codigo = e.getKeyCode();
        
        if (codigo == KeyEvent.VK_LEFT || codigo == KeyEvent.VK_RIGHT) velX = 0;
        if (codigo == KeyEvent.VK_UP || codigo == KeyEvent.VK_DOWN) velY = 0;
    }

    // Não utilizada, mas obrigatória por causa da interface
    public void keyTyped(KeyEvent e) {}

    public static void main(String[] args) {
        new JogoExemplo();
    }
}
