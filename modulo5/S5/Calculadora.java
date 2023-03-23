import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        char operador;
        double num1, num2, resultado;

        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingresa el operador que deseas (+, -, *, /)");
        operador = entrada.next().charAt(0);

        System.out.println("Ingersa el primer numero");
        num1 = entrada.nextDouble();
        System.out.println("Ingersa el segundo numero");
        num1 = entrada.nextDouble();

        System.out.println("Ingresa el primer numero");
        num1 = entrada.nextDouble();
        System.out.println("Ingresa el segundo numero");
        num2 = entrada.nextDouble();
        entrada.close();

        switch (operador) {
            case '+':
                resultado = num1 + num2;
                System.out.println("el resultado es" + resultado);
                break;

            case '-':
                resultado = num1 - num2;
                System.out.println("el resultado es" + resultado);
                break;

            case '*':
                resultado = num1 * num2;
                System.out.println("el resultado es" + resultado);
                break;

            case '/':
                resultado = num1 / num2;
                System.out.println("el resultado es" + resultado);
                break;

            default:
                System.out.println("Operador Invalido");
        }
    }
}