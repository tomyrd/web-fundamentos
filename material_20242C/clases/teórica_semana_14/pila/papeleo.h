#ifndef PAPELEO_H
#define PAPELEO_H

#include <stdbool.h>

typedef struct papeleo papeleo_t;

// Pre: -
// Post: Crea un TDA papeleo en el heap y devuelve un puntero al
// mismo. Devuelve NULL si no lo pudo crear.
papeleo_t *papeleo_crear();


// Pre: El papeleo recibido fue previamente creado con `papeleo_crear`.
// Post: Libera la memoria que se reservó en el heap para el papeleo.
void papeleo_destruir(papeleo_t *papeleo);


// Pre: El papeleo recibido fue previamente creado con `papeleo_crear`.
// Post: Se eliminará el primer reporte del papeleo. Devuelve true si se
// eliminó correctamente o false si el papeleo estaba vacío y no se pudo
// eliminar nada. En caso de devolver true, el elemento que se acaba de
// eliminar será devuelto por referencia mediante el parámetro
// `elemento_eliminado`.
bool papeleo_eliminar_primero(papeleo_t *papeleo, int *elemento_eliminado);


// Pre: El papeleo recibido fue previamente creado con `papeleo_crear`.
// Post: Agrega un reporte al principio del papeleo.
bool papeleo_agregar_primero(papeleo_t *vector, int nuevo_elemento);

#endif // PAPELEO_H
