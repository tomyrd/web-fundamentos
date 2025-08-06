#include "cola.h"
#include <stdio.h>
#include <stdlib.h>

typedef struct nodo {
    int dato;
    struct nodo* siguiente;
} nodo_t;

struct cola {
    nodo_t* primero;
    nodo_t* ultimo;
};

cola_t* cola_crear(void) {
    cola_t* cola = malloc(sizeof(cola_t));
    if (!cola) return NULL;
    cola->primero = NULL;
    cola->ultimo = NULL;
    return cola;
}

bool cola_encolar(cola_t* cola, int valor) {
    nodo_t* nuevo = malloc(sizeof(nodo_t));
    if (!nuevo) return false;
    nuevo->dato = valor;
    nuevo->siguiente = NULL;

    if (cola->ultimo) {
        cola->ultimo->siguiente = nuevo;
    } else {
        cola->primero = nuevo;
    }
    cola->ultimo = nuevo;
    return true;
}

bool cola_desencolar(cola_t* cola) {
    if (!cola || !cola->primero) return false;

    nodo_t* temp = cola->primero;
    cola->primero = temp->siguiente;
    if (!cola->primero) {
        cola->ultimo = NULL;
    }
    free(temp);
    return true;
}

int cola_primero(const cola_t* cola) {
    if (!cola || !cola->primero) return 0;
    return cola->primero->dato;
}

bool cola_esta_vacia(const cola_t* cola) {
    return cola && cola->primero == NULL;
}

void cola_destruir(cola_t* cola) {
    while (!cola_esta_vacia(cola)) {
        cola_desencolar(cola);
    }
    free(cola);
}


void cola_mostrar(const cola_t* cola) {
    if (!cola) {
        printf("Cola inexistente\n");
        return;
    }

    nodo_t* actual = cola->primero;
    printf("[ ");
    while (actual != NULL) {
        printf("[%d] ", actual->dato);
        actual = actual->siguiente;
        if(actual != NULL) {
            printf("-> ");
        }
    }
    printf("]\n");
}