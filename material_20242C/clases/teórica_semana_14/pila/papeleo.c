#include <stdlib.h>
#include "papeleo.h"


typedef struct nodo {
    int dato;
    struct nodo* siguiente;
} nodo_t;

struct papeleo {
    nodo_t* primero;
};


papeleo_t *papeleo_crear(void) {
    papeleo_t *nuevo = malloc(sizeof(papeleo_t));
    if (!nuevo) return NULL;
    nuevo->primero = NULL;
    return nuevo;
}

void papeleo_destruir(papeleo_t *papeleo) {
    if (!papeleo) return;

    nodo_t* actual = papeleo->primero;
    while (actual) {
        nodo_t* prox = actual->siguiente;
        free(actual);
        actual = prox;
    }
    free(papeleo);
}

bool papeleo_eliminar_primero(papeleo_t *papeleo, int *elemento_eliminado) {
    if (!papeleo || !papeleo->primero) return false;

    nodo_t* a_eliminar = papeleo->primero;
    if (elemento_eliminado)
        *elemento_eliminado = a_eliminar->dato;

    papeleo->primero = a_eliminar->siguiente;
    free(a_eliminar);
    return true;
}

bool papeleo_agregar_primero(papeleo_t *papeleo, int nuevo_elemento) {
    if (!papeleo) return false;

    nodo_t* nuevo = malloc(sizeof(nodo_t));
    if (!nuevo) return false;

    nuevo->dato = nuevo_elemento;
    nuevo->siguiente = papeleo->primero;
    papeleo->primero = nuevo;
    return true;
}
