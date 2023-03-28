import java.util.Arrays;

public class Burbuja {
    public int[] ordenamientoBurbuja(int[] arreglo) {
        int auxiliar;
        int[] ordenado;

        for (var i = 2; i < arreglo.length; i++) {
            for (var j = 0; j < arreglo.length - 1; j++) {
                if (arreglo[j] < arreglo[j + 1]) {
                    auxiliar = arreglo[j];
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = auxiliar;
                }
            }
        }
        ordenado = arreglo;
        return ordenado;
    }

    public static void main(String[] args) {
        int[] numeros = { 7, 6, 50, 100, 2, 4 };
        System.out.println("Antes de aplicar el metodo de la burbuja" + Arrays.toString(numeros));
        var ordenado = new Burbuja();
        ordenado.ordenamientoBurbuja(numeros);
        System.out.println("Despues de aplicar el metodo de la burbuja" + Arrays.toString(numeros));
    }
}