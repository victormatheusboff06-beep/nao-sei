package com.mycompany.jogocontrole;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class JogoControle extends JPanel implements KeyListener, ActionListener {
    // Posição e velocidade do personagem
    private int x = 150, y = 150;
    private int velX = 0, velY = 0;
    
    public JogoControle() {
        JFrame frame = new JFrame("Controle no NetBeans");
        frame.add(this);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null); // Centraliza a janela
        frame.setVisible(true);
        
        // Ativa os comandos do teclado
        this.addKeyListener(this);
        this.setFocusable(true);
        
        // Loop do jogo (60 FPS)
        Timer timer = new Timer(16, this);
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        // Desenha o fundo
        g.setColor(Color.BLACK);
        g.fillRect(0, 0, getWidth(), getHeight());
        
        // Desenha o jogador (Quadrado Verde)
        g.setColor(Color.GREEN);
        g.fillRect(x, y, 40, 40);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        x += velX;
        y += velY;
        repaint(); // Atualiza a tela
    }

    @Override
    public void keyPressed(KeyEvent e) {
        int codigo = e.getKeyCode();
        
        // Controles por Setas ou W,A,S,D
        if (codigo == KeyEvent.VK_LEFT || codigo == KeyEvent.VK_A) velX = -5;
        if (codigo == KeyEvent.VK_RIGHT || codigo == KeyEvent.VK_D) velX = 5;
        if (codigo == KeyEvent.VK_UP || codigo == KeyEvent.VK_W) velY = -5;
        if (codigo == KeyEvent.VK_DOWN || codigo == KeyEvent.VK_S) velY = 5;
    }

    @Override
    public void keyReleased(KeyEvent e) {
        int codigo = e.getKeyCode();
        
        if (codigo == KeyEvent.VK_LEFT || codigo == KeyEvent.VK_RIGHT || codigo == KeyEvent.VK_A || codigo == KeyEvent.VK_D) {
            velX = 0;
        }
        if (codigo == KeyEvent.VK_UP || codigo == KeyEvent.VK_DOWN || codigo == KeyEvent.VK_W || codigo == KeyEvent.VK_S) {
            velY = 0;
        }
    }

    @Override
    public void keyTyped(KeyEvent e) {}

    public static void main(String[] args) {
        // Garante que a interface gráfica rode na thread correta
        SwingUtilities.invokeLater(() -> new JogoControle());
    }
}
