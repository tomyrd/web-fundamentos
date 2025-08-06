#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "cola.h"

#define ERROR -1

int main() {
    cola_t* cola = cola_crear();
    if (!cola) {
        printf("Error: No se pudo crear la cola\n");
        return ERROR;
    }

    char input[20];
    bool salir = false;

    while (!salir) {
        printf("Comandos disponibles:\n");
        printf("  encolar <numero>\n");
        printf("  desencolar\n");
        printf("  primero\n");
        printf("  salir\n\n");
        cola_mostrar(cola);
        printf(">>> ");
        scanf("%s", input);

        system("clear");
        if (strcmp(input, "encolar") == 0) {
            scanf(" %[^\n]", input);
            while (getchar() != '\n');

            int valor = atoi(input);
            if (valor == 0 && strcmp(input, "0") != 0) {
                printf("Error: Debe ingresar un número válido\n\n");
            } else if (cola_encolar(cola, valor)) {
                printf("Se encoló el valor %d\n\n", valor);
            } else {
                printf("Error al encolar\n");
            }

        } else if (strcmp(input, "desencolar") == 0) {
            if (cola_desencolar(cola)) {
                printf("Elemento desencolado con éxito\n\n");
            } else {
                printf("La cola está vacía\n");
            }

        } else if (strcmp(input, "primero") == 0) {
            if (cola_esta_vacia(cola)) {
                printf("\nLa cola está vacía\n\n");
            } else {
                printf("Primero: %d\n\n", cola_primero(cola));
            }
        } else if (strcmp(input, "salir") == 0) {
            salir = true;
        } else {
            printf("Comando no reconocido. Intente nuevamente.\n\n");
        }
    }

    cola_destruir(cola);
    printf("Cola destruida. ¡Hasta luego!\n");
    return 0;
}
