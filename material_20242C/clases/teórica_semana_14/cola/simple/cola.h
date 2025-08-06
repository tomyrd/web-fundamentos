#ifndef COLA_H
#define COLA_H

#include <stdbool.h>

typedef struct cola cola_t;

/* Pre condiciones:
 * Post condiciones: Crea una cola vacía. Devuelve NULL en caso de error.
 */
cola_t* cola_crear();


/* Pre condiciones: cola debe apuntar a una cola creada con `cola_crear`.
 * Post condiciones: Encola un número entero. Devuelve true si pudo encolar, false en caso contrario.
 */
bool cola_encolar(cola_t* cola, int valor);


/* Pre condiciones: cola debe apuntar a una cola creada con `cola_crear`.
 * Post condiciones: Desencola el primer elemento de la cola.
                     Devuelve true si se pudo desencolar, false si la cola estaba vacía.
 */
bool cola_desencolar(cola_t* cola);


/* Pre condiciones: cola debe apuntar a una cola creada con `cola_crear`.
 * Post condiciones: Devuelve el primer número de la cola sin desencolarlo.
 */
int cola_primero(const cola_t* cola);


/* Pre condiciones: cola debe apuntar a una cola creada con `cola_crear`.
 * Post condiciones: Devuelve true si la cola está vacía, false en caso contrario.
 */
bool cola_esta_vacia(const cola_t* cola);


/* Pre condiciones: cola debe apuntar a una cola creada con `cola_crear`.
 * Post condiciones: Destruye la cola y libera la memoria.
 */
void cola_destruir(cola_t* cola);


/* Pre condiciones: cola debe apuntar a una cola creada con `cola_crear`.
 * Post condiciones: Muestra la cola por pantalla de forma horizontal (de izquierda a derecha).
 */
void cola_mostrar(const cola_t* cola);


#endif // COLA_H
