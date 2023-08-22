import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RestApiService } from 'src/app/_servicios/rest-api.service';

@Component({
  selector: 'algo1-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent implements OnInit {

  cronograma: any;
  fecha: string;
  actual = 0;
  cronogramaURL: any;
  hitosTipos: Object;

  constructor(
    public datepipe: DatePipe,
    public restApi: RestApiService) { }

  ngOnInit(): void {
    this.cronogramaURL = this.restApi.getCronogramaPdf();

    this.fecha = this.datepipe.transform(new Date(), 'yyyyMMdd');
    this.cronograma = [
      {
        numero: 1,
        fechaInicio: 20230821,
        fechaFin: 20230825,
        teorica: {
          fecha: new Date(2023, 7, 22),
          temas: [
            'Introducción a la materia.',
            'Algoritmos.',
            'Variables, constantes y literales.',
            'Datos de entrada y salida.',
            'Pre y pos condiciones.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 7, 24),
          temas: [
            'Tipos de dato y operadores.',
            'Codificación, compilación y ejecución.',
            'Estructuras de control.',
            'Elaboración de algoritmos.'
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 2,
        fechaInicio: 20230828,
        fechaFin: 20230901,
        teorica: {
          fecha: new Date(2023, 7, 29),
          temas: [
            'Codificación, compilación y ejecución.',
            'Estructuras de control.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 7, 31),
          temas: [
            'Codificación, compilación y ejecución.',
            'Estructuras de control.',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 3,
        fechaInicio: 20230904,
        fechaFin: 20230908,
        teorica: {
          fecha: new Date(2023, 8, 5),
          temas: [
            'Funciones y procedimientos.',
            'Pasaje de parámetros por valor y por referencia.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 8, 7),
          temas: [
            'Funciones y procedimientos.',
            'Pasaje de parámetros por valor y por referencia.',
          ],
          hitos: [
            {
              titulo: 'Presentación TP1',
              tipo: 'presentacion-tp',
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 4,
        fechaInicio: 20230911,
        fechaFin: 20230915,
        teorica: {
          fecha: new Date(2023, 8, 12),
          temas: [
            'Bibliotecas.',
          ],
          hitos: [
            {
                titulo: "Ejercicio integrador",
                tipo: "otros"
            }
          ],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 8, 14),
          temas: [
            'Bibliotecas.',
          ],
          hitos: [
            {
              titulo: "Ejercicio integrador",
              tipo: "otros"
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 5,
        fechaInicio: 20230918,
        fechaFin: 20230922,
        teorica: {
          fecha: new Date(2023, 8, 19),
          temas: [
            'Vectores y Matrices.',
            'Búsqueda lineal.',
            'Eliminación de elementos.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 8, 21),
          temas: [
            'Vectores y Matrices.',
            'Búsqueda lineal.',
            'Eliminacion de elementos.',
          ],
          hitos: [
            {
              titulo: 'Entrega TP1',
              tipo: 'entrega-tp',
            },
          ],
          esFeriado: false,
        },
      },
      {
        numero: 6,
        fechaInicio: 20230925,
        fechaFin: 20230929,
        teorica: {
          fecha: new Date(2023, 8, 26),
          temas: [
            'Registros.',
            'Estructuras anidadas.'
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 8, 28),
          temas: [
            'Registros.',
            'Estructuras anidadas.'
          ],
          hitos: [
            {
              titulo: 'Presentación TP2',
              tipo: 'presentacion-tp',
            },
            
          ],
          esFeriado: false,
        },
      },
      {
        numero: 7,
        fechaInicio: 20231002,
        fechaFin: 20231006,
        teorica: {
          fecha: new Date(2023, 9, 3),
          temas: [
            'Strings.',
            'GDB.'
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 9, 3),
          temas: [
            'Strings.',
            'GDB.'
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 8,
        fechaInicio: 20231009,
        fechaFin: 20231013,
        teorica: {
          fecha: new Date(2023, 9, 10),
          temas: [
            'Métodos de ordenamiento.',
            'Inserción ordenada.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 9, 14),
          temas: [
            'Métodos de ordenamiento.',
            'Inserción ordenada.',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 9,
        fechaInicio: 20231016,
        fechaFin: 20231020,
        teorica: {
          fecha: new Date(2023, 9, 17),
          temas: [
            'Búsqueda binaria.',
            'Recursividad.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 9, 19),
          temas: [
            'Búsqueda binaria.',
            'Recursividad.',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 10,
        fechaInicio: 20231023,
        fechaFin: 20231027,
        teorica: {
          fecha: new Date(2023, 9, 24),
          temas: [
            'Recursividad.',
            'Unión, intersección y diferencia.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 9, 26),
          temas: [
            'Recursividad.',
            'Unión, intersección y diferencia.',
          ],
          hitos: [
            {
              titulo: 'Entrega TP2',
              tipo: 'entrega-tp',
            },
          ],
          esFeriado: false,
        },
      },
      {
        numero: 11,
        fechaInicio: 20231030,
        fechaFin: 20231103,
        teorica: {
          fecha: new Date(2023, 9, 31),
          temas: [],
          hitos: [
            {
              titulo: 'Repaso',
              tipo: 'otros',
            },
          ],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 10, 2),
          temas: [],
          hitos: [
            {
              titulo: 'Parcial',
              tipo: 'parcial',
            },
          ],
          esFeriado: false,
        },
      },
      {
        numero: 12,
        fechaInicio: 20231106,
        fechaFin: 20231110,
        teorica: {
          fecha: new Date(2023, 10, 7),
          temas: [
            'Algo1 en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 10, 9),
          temas: [
            'Algo1 en Python.',
          ],
          hitos: [
            {
              titulo: 'Reentrega TP2',
              tipo: 'entrega-tp',
            },
            {
              titulo: 'Presentación TP3 (Video)',
              tipo: 'presentacion-tp',
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 13,
        fechaInicio: 20231113,
        fechaFin: 20231117,
        teorica: {
          fecha: new Date(2023, 10, 14),
          temas: [
            'Algo1 en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 10, 16),
          temas: [
            'Archivos CSV en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 14,
        fechaInicio: 20231120,
        fechaFin: 20231124,
        teorica: {
          fecha: new Date(2023, 10, 21),
          temas: [
            'Archivos JSON en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 10, 23),
          temas: [],
          hitos: [
            {
                titulo: 'Repaso Python',
                tipo: 'otros'
            },
            {
              titulo: 'Entrega TP3',
              tipo: 'entrega-tp',
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 15,
        fechaInicio: 20231127,
        fechaFin: 20231201,
        teorica: {
          fecha: new Date(2023, 10, 28),
          temas: [
            'Diccionarios, map, filter.'
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 10, 30),
          temas: [],
          hitos: [
            {
                titulo: 'Consultas',
                tipo: 'otros'
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 16,
        fechaInicio: 20231204,
        fechaFin: 20231208,
        teorica: {
          fecha: new Date(2023, 11, 5),
          temas: [],
          hitos: [
            {
              titulo: '1er recuperatorio parcial',
              tipo: 'parcial',
            },
          ],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 11, 7),
          temas: [],
          hitos: [
            {
              titulo: 'Rentrega TP3',
              tipo: 'entrega-tp',
            },
            {
              titulo: 'Retrospectiva',
              tipo: 'otros',
            },
          ],
          esFeriado: false,
        },
      },
    ];
  }

  next(): void {
    if (this.actual < this.cronograma.length) this.actual++;
  }

  previous(): void {
    if (this.actual > 0) this.actual--;
  }

}
