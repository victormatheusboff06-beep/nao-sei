/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exerciciolivro;

import java.util.Scanner;


public class ExercicioLivro {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        int TAMANHO = 10;
        int []vetor1 = new int[TAMANHO];
        int []vetor2 = new int[TAMANHO];
        
        for (int i = 0; i < 10; i++) {
            System.out.println("Vetor numero 1, casa [ " + (i+1) + " ]");
            vetor1[i] = sc.nextInt();
        }
        
        for (int i = 0; i < 10; i++) {
            System.out.println("Vetor numero 2, casa [ " + (i+1) + " ]");
            vetor2[i] = sc.nextInt();
        }
        System.out.println("A Intersecçao de X e Y: ");
        System.out.println("\n X: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor1[i] + ", ");
        }
        System.out.println("\n Y: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor2[i] + ", ");
        }
        
        System.out.println("\n A intersecçao de X e Y foi: ");
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                if (vetor1[i] == vetor2[j]) {
                    
                    System.out.println(vetor1[i]);
                }
            }
        }
        
       System.out.println("A soma de X e Y: ");
        System.out.println("\n X: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor1[i] + ", ");
        }
        System.out.println("\n Y: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor2[i] + ", ");
        }
        
        System.out.println("\n A soma de X e Y foi: ");
        
            for (int j = 0; j < 10; j++) {
                System.out.println( (vetor2[j] + vetor1[j]) );
            }
        
        System.out.println("A multiplicaçao de X e Y: ");
        System.out.println("\n X: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor1[i] + ", ");
        }
        System.out.println("\n Y: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor2[i] + ", ");
        }
        
        System.out.println("\n A soma de X e Y foi: ");
        
            for (int j = 0; j < 10; j++) {
                System.out.println( (vetor2[j] * vetor1[j]) );
            }
        
        System.out.println("A Uniao de X e Y: ");
        System.out.println("\n X: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor1[i] + ", ");
        }
        System.out.println("\n Y: ");
        for (int i = 0; i < 10; i++) {
            System.out.println(vetor2[i] + ", ");
        }
        
        System.out.println("A Uniao de X e Y: ");
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                if (vetor1[i] == vetor2[j]) {
                    
                    System.out.println(vetor1[i]);
                }
                if (vetor1[i] &&)
            }
        } 
    }
    
}
