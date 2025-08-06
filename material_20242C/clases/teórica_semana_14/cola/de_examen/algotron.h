#ifndef ALGOTRON_H
#define ALGOTRON_H

#include <stdbool.h>

#define MAX_BUENAS_PRACTICAS 15
#define MAX_NOMBRE_BUENA_PRACTICA 100

typedef struct entrega {
    bool pasan_todas_pruebas;
    bool pasan_pruebas_minimas;
    char buenas_practicas_utilizadas[MAX_BUENAS_PRACTICAS][MAX_NOMBRE_BUENA_PRACTICA]; 
    int cantidad_buenas_practicas_utilizadas;
} entrega_t;


typedef struct algotron algotron_t;

/* Pre condiciones:
 * Post condiciones: Crea una cola vacía. Devuelve NULL en caso de error.
 */
algotron_t* algotron_crear();


/* Pre condiciones: algotron debe apuntar a una cola creada con `algotron_crear`.
 * Post condiciones: Encola una entrega. Devuelve true si pudo encolar, false en caso contrario.
 */
bool algotron_encolar(algotron_t* algotron, entrega_t nueva_entrega);


/* Pre condiciones: algotron debe apuntar a una cola creada con `algotron_crear`.
 * Post condiciones: Desencola el primer elemento de algotron.
                     Devuelve true si se pudo desencolar, false si la cola estaba vacía.
 */
bool algotron_desencolar(algotron_t* algotron);


/* Pre condiciones: algotron debe apuntar a una cola creada con `algotron_crear`.
 * Post condiciones: Devuelve el primer elemento de algotron sin desencolarlo. O -1 en caso de error o cola vacía.
 */
entrega_t algotron_primero(const algotron_t* algotron);


/* Pre condiciones: algotron debe apuntar a una cola creada con `algotron_crear`.
 * Post condiciones: Devuelve true si algotron está vacío, false en caso contrario.
 */
bool algotron_esta_vacio(const algotron_t* algotron);


/* Pre condiciones: algotron debe apuntar a una cola creada con `algotron_crear`.
 * Post condiciones: Destruye algotron y libera la memoria.
 */
void algotron_destruir(algotron_t* algotron);


/* Pre condiciones: algotron debe apuntar a una cola creada con `algotron_crear`.
 * Post condiciones: Muestra las entregas de algotron por pantalla de forma vertical (inicio arriba y fin abajo).
 */
void algotron_mostrar(const algotron_t* algotron);


#endif // ALGOTRON_H
