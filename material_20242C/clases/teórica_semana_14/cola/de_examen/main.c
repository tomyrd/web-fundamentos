#include <stdio.h>
#include "algotron.h"
#include <string.h>

const int ERROR = 1;

const int CANT_MIN_BUENAS_PRACTICAS = 4;
#define BUENA_PRACTICA_FUNDAMENTAL "Modularizacion"


/* Pre condiciones: 'buenas_practicas_utilizadas' tiene que contener un string en cada fila (cada fila debe terminar con '\O').
                    'cantidad_buenas_practicas_utilizadas' debe ser menor a MAX_BUENAS_PRACTICAS y mayor o igual a 0.
 * Post condiciones:
 */
bool cumple_bp_fundamental(char buenas_practicas_utilizadas[MAX_BUENAS_PRACTICAS][MAX_NOMBRE_BUENA_PRACTICA], int cantidad_buenas_practicas_utilizadas) {
    int i = 0;
    bool encontrada = false;

    while(!encontrada && i < cantidad_buenas_practicas_utilizadas) {
        if (strcmp(buenas_practicas_utilizadas[i], BUENA_PRACTICA_FUNDAMENTAL) == 0) {
            encontrada = true;
        } else {
            i++;
        }
    }

    return encontrada;
}


/* Pre condiciones: El campo 'buenas_practicas_utilizadas' del entrega_t tiene que contener un string en cada fila (cada fila debe terminar con '\O').
                    El campo 'cantidad_buenas_practicas_utilizadas' debe ser menor a MAX_BUENAS_PRACTICAS y mayor o igual a 0.
 * Post condiciones:
 */
bool entrega_aprobada(entrega_t entrega) {
    return entrega.pasan_todas_pruebas && entrega.cantidad_buenas_practicas_utilizadas >= CANT_MIN_BUENAS_PRACTICAS && cumple_bp_fundamental(entrega.buenas_practicas_utilizadas, entrega.cantidad_buenas_practicas_utilizadas);
}


/* Pre condiciones: 'algotron' debe apuntar a una cola creada con algotron_crear.
                    Además 'algotron' debe ser distinto de NULL.
 * Post condiciones: Devuelve el porcentaje de entregas aprobadas.
 */
int porcentaje_tps_aprobados(algotron_t* algotron) {
    int total_tps = 0;
    int tps_aprobados = 0;
    
    entrega_t entrega = algotron_primero(algotron);
    while(algotron_desencolar(algotron)) {
        total_tps++;

        if (entrega_aprobada(entrega)) {
            tps_aprobados++;
        }

        entrega = algotron_primero(algotron);
    }

    return (tps_aprobados * 100) / total_tps;
}


/* Pre condiciones: 'algotron' deber referenciar a una dirección de memoria obtenida por retorno de algotron_crear.
 * Post condiciones: quita todas las entregas desaprobadas de la cola algotron.
 */
void quitar_desaprobados(algotron_t* *algotron) {
    
    algotron_t* aux = algotron_crear();
    if(aux == NULL) {
        printf("Error al intentar crear una cola auxiliar");
        return;
    }

    entrega_t entrega;
    while(!algotron_esta_vacio(*algotron)) {
        entrega = algotron_primero(*algotron);
        algotron_desencolar(*algotron);
        
        if (entrega_aprobada(entrega)) {
            algotron_encolar(aux, entrega);
        }
    }

    algotron_destruir(*algotron);
    *algotron = aux;
}


/* Pre condiciones: 'algotron' debe apuntar a una cola creada con algotron_crear.
                    Además 'algotron' debe ser distinto de NULL.
 * Post condiciones: Carga la cola con entregas de ejemplo.
 */
void cargar_cola(algotron_t* cola); 


int main() {
    algotron_t* cola = algotron_crear();
    if (!cola) {
        printf("Error al crear la cola\n");
        return ERROR;
    }

    cargar_cola(cola);

    // algotron_mostrar(cola);
    // int porcentaje = porcentaje_tps_aprobados(cola);
    // printf("\nEl porcentaje de tps aprobados es del %i\n", porcentaje);

    quitar_desaprobados(&cola);
    algotron_mostrar(cola);

    algotron_destruir(cola);
    return 0;
}


/* Pre condiciones: 'practicas' debe contener strings en sus filas.
 * Post condiciones: Carga buenas prácticas en una entrega.
 */
void cargar_buenas_practicas(entrega_t* entrega, const char* practicas[], int cantidad) {
    entrega->cantidad_buenas_practicas_utilizadas = cantidad;
    for (int i = 0; i < cantidad; i++) {
        strcpy(entrega->buenas_practicas_utilizadas[i], practicas[i]);
    }
}


void cargar_cola(algotron_t* cola) {
    const char* todas[] = {
        "Modularizacion",
        "Corte correcto de estructuras de control iterativas",
        "Uso de constantes",
        "Pre y post condiciones",
        "Buena indentacion",
        "Nombres descriptivos para funciones",
        "Nombres descriptivos para variables"
    };

    entrega_t e;

    const char* p1[] = { todas[0], todas[2], todas[5] };
    e.pasan_pruebas_minimas = true; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, p1, 3);
    algotron_encolar(cola, e);

    const char* p2[] = { todas[0], todas[1], todas[2], todas[3], todas[5] };
    e.pasan_pruebas_minimas = true; e.pasan_todas_pruebas = true;
    cargar_buenas_practicas(&e, p2, 5);
    algotron_encolar(cola, e);

    const char* p3[] = { todas[3], todas[4] };
    e.pasan_pruebas_minimas = false; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, p3, 2);
    algotron_encolar(cola, e);

    const char* p4[] = { todas[0], todas[1], todas[2], todas[3], todas[4], todas[6] };
    e.pasan_pruebas_minimas = true; e.pasan_todas_pruebas = true;
    cargar_buenas_practicas(&e, p4, 6);
    algotron_encolar(cola, e);

    const char* p5[] = { todas[1], todas[2], todas[4], todas[6] };
    e.pasan_pruebas_minimas = true; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, p5, 4);
    algotron_encolar(cola, e);

    const char* p6[] = { todas[0] };
    e.pasan_pruebas_minimas = false; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, p6, 1);
    algotron_encolar(cola, e);

    const char* p7[] = { todas[1], todas[2], todas[3], todas[5], todas[6] };
    e.pasan_pruebas_minimas = true; e.pasan_todas_pruebas = true;
    cargar_buenas_practicas(&e, p7, 5);
    algotron_encolar(cola, e);

    e.pasan_pruebas_minimas = false; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, NULL, 0);
    algotron_encolar(cola, e);

    const char* p9[] = { todas[0], todas[4], todas[5], todas[6] };
    e.pasan_pruebas_minimas = true; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, p9, 4);
    algotron_encolar(cola, e);

    const char* p10[] = { todas[3], todas[5] };
    e.pasan_pruebas_minimas = false; e.pasan_todas_pruebas = false;
    cargar_buenas_practicas(&e, p10, 2);
    algotron_encolar(cola, e);
}
