#include "algotron.h"
#include <stdlib.h>
#include <stdio.h>
#include <string.h>


typedef struct nodo {
    entrega_t entrega;
    struct nodo* siguiente;
} nodo_t;

struct algotron {
    nodo_t* primero;
    nodo_t* ultimo;
};


algotron_t* algotron_crear() {
    algotron_t* algotron = malloc(sizeof(algotron_t));
    if (!algotron) return NULL;
    algotron->primero = NULL;
    algotron->ultimo = NULL;
    return algotron;
}


bool algotron_encolar(algotron_t* algotron, entrega_t nueva_entrega) {
    if (!algotron) return false;

    nodo_t* nuevo = malloc(sizeof(nodo_t));
    if (!nuevo) return false;

    nuevo->entrega = nueva_entrega;
    nuevo->siguiente = NULL;

    if (algotron->ultimo) {
        algotron->ultimo->siguiente = nuevo;
    } else {
        algotron->primero = nuevo;
    }

    algotron->ultimo = nuevo;
    return true;
}


bool algotron_desencolar(algotron_t* algotron) {
    if (!algotron || !algotron->primero) return false;

    nodo_t* temp = algotron->primero;
    algotron->primero = temp->siguiente;
    if (!algotron->primero) {
        algotron->ultimo = NULL;
    }

    free(temp);
    return true;
}


entrega_t algotron_primero(const algotron_t* algotron) {
    entrega_t vacia = {.cantidad_buenas_practicas_utilizadas = -1};
    if (!algotron || !algotron->primero) return vacia;
    return algotron->primero->entrega;
}


bool algotron_esta_vacio(const algotron_t* algotron) {
    return algotron && algotron->primero == NULL;
}


void algotron_destruir(algotron_t* algotron) {
    if (!algotron) return;

    while (!algotron_esta_vacio(algotron)) {
        algotron_desencolar(algotron);
    }

    free(algotron);
}


void algotron_mostrar(const algotron_t* algotron) {
    if (!algotron) {
        printf("algotron inexistente\n");
        return;
    }

    const nodo_t* actual = algotron->primero;
    int index = 1;

    if (!actual) {
        printf("La algotron está vacía.\n");
        return;
    }

    printf("Contenido de la algotron (de primero a último):\n");
    while (actual) {
        printf("Entrega #%d\n", index++);
        printf("  - Pruebas mínimas: %s\n", actual->entrega.pasan_pruebas_minimas ? "Sí" : "No");
        printf("  - Todas las pruebas: %s\n", actual->entrega.pasan_todas_pruebas ? "Sí" : "No");
        printf("  - Buenas prácticas utilizadas (%d):\n",
               actual->entrega.cantidad_buenas_practicas_utilizadas);

        for (int i = 0; i < actual->entrega.cantidad_buenas_practicas_utilizadas; i++) {
            printf("     • %s\n", actual->entrega.buenas_practicas_utilizadas[i]);
        }

        printf("\n");
        actual = actual->siguiente;
    }
}
