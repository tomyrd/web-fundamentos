#include "papeleo.h"
#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>

const int NO_VALIDO = -1;

// PRE: si existe, el papeleo tiene que haber sido creado con papeleo_crear
// POST: elimina todos los elementos del papeleo y devuelve true si los mismos estaban en orden descendente. Devuelve true si está vacío, y false si el papeleo no existe. Al final lo destruye.
bool papeleo_ordenado(papeleo_t* papeleo){
    if(!papeleo){
        printf("No existe el papeleo\n");
        return false;
    }

    int tope_anterior = NO_VALIDO;
    if(!papeleo_eliminar_primero(papeleo, &tope_anterior)) {
        printf("El papeleo está vacío o no pudo sacarse elementos\n");
        return true;
    }

    int tope = NO_VALIDO;
    bool ordenado = true;

    while(papeleo_eliminar_primero(papeleo, &tope)) {
        if (tope_anterior < tope) {
            ordenado = false;
        }
        tope_anterior = tope;
    }

    papeleo_destruir(papeleo);
    return ordenado;
}



int main() {

    papeleo_t* papeleo = papeleo_crear();

    // papeleo_agregar_primero(papeleo, 1);
    // papeleo_agregar_primero(papeleo, 5);
    // papeleo_agregar_primero(papeleo, 12);
    // papeleo_agregar_primero(papeleo, 9);

    if(papeleo_ordenado(papeleo)){
        printf("El papeleo está ordenado\n");
    }
    else{
        printf("El papeleo NO está ordenado\n");
    }

    return 0;
}