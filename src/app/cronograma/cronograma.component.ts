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
        fechaInicio: 20230313,
        fechaFin: 20230319,
        teorica: {
          fecha: new Date(2023, 2, 14),
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
          fecha: new Date(2023, 2, 16),
          temas: [
            'Tipos de dato y operadores.',
            'Codificación, compilación y ejecución.',
            'Estructuras de control.',
            'Elaboración de algoritmos'
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 2,
        fechaInicio: 20230320,
        fechaFin: 20230326,
        teorica: {
          fecha: new Date(2022, 2, 21),
          temas: [
            'Codificación, compilación y ejecución.',
            'Estructuras de control.',
            'git y Github.'
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 2, 23),
          temas: [
            'Codificación, compilación y ejecución.',
            'Estructuras de control.',
            'git y Github.'
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 3,
        fechaInicio: 20230327,
        fechaFin: 20230402,
        teorica: {
          fecha: new Date(2023, 2, 28),
          temas: [
            'Funciones y procedimientos.',
            'Pasaje de parámetros por valor y por referencia.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 2, 30),
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
        fechaInicio: 20230403,
        fechaFin: 20230409,
        teorica: {
          fecha: new Date(2023, 3, 4),
          temas: [],
          hitos: [
            {
                titulo: "Ejercicio integrador",
                tipo: "otros"
            }
          ],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 3, 6),
          temas: [],
          hitos: [],
          esFeriado: true,
        },
      },
      {
        numero: 5,
        fechaInicio: 20230410,
        fechaFin: 20230416,
        teorica: {
          fecha: new Date(2023, 3, 11),
          temas: [
            'Vectores y Matrices.',
            'Búsqueda lineal.',
            'Eliminación de elementos.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 3, 13),
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
        fechaInicio: 20230417,
        fechaFin: 20230423,
        teorica: {
          fecha: new Date(2023, 3, 18),
          temas: [
            'Bibliotecas.',
            'Registros.',
            'Estructuras anidadas.'
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 3, 20),
          temas: [
            'Bibliotecas.',
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
        fechaInicio: 20230424,
        fechaFin: 20230430,
        teorica: {
          fecha: new Date(2023, 3, 25),
          temas: [
            'Strings.',
            'GDB.'
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 3, 27),
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
        fechaInicio: 20230501,
        fechaFin: 20230507,
        teorica: {
          fecha: new Date(2023, 4, 2),
          temas: [
            'Métodos de ordenamiento.',
            'Inserción ordenada.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 4, 4),
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
        fechaInicio: 20230508,
        fechaFin: 20230514,
        teorica: {
          fecha: new Date(2023, 4, 9),
          temas: [
            'Búsqueda binaria.',
            'Recursividad.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 4, 11),
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
        fechaInicio: 20230515,
        fechaFin: 20230521,
        teorica: {
          fecha: new Date(2023, 4, 16),
          temas: [
            'Recursividad.',
            'Unión, intersección y diferencia.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 4, 18),
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
        fechaInicio: 20230522,
        fechaFin: 20230528,
        teorica: {
          fecha: new Date(2023, 4, 23),
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
          fecha: new Date(2023, 4, 25),
          temas: [],
          hitos: [],
          esFeriado: true,
        },
      },
      {
        numero: 12,
        fechaInicio: 20230529,
        fechaFin: 20230604,
        teorica: {
          fecha: new Date(2023, 4, 30),
          temas: [],
          hitos: [
            {
              titulo: 'Parcial',
              tipo: 'parcial',
            },
          ],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 5, 1),
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
        fechaInicio: 20230605,
        fechaFin: 20230611,
        teorica: {
          fecha: new Date(2023, 5, 6),
          temas: [
            'Algo1 en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 5, 8),
          temas: [
            'Archivos CSV en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 14,
        fechaInicio: 20230612,
        fechaFin: 20230618,
        teorica: {
          fecha: new Date(2023, 5, 13),
          temas: [
            'Archivos JSON en Python.',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2023, 5, 15),
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
        fechaInicio: 20230619,
        fechaFin: 20230625,
        teorica: {
          fecha: new Date(2023, 5, 20),
          temas: [],
          hitos: [],
          esFeriado: true,
        },
        practica: {
          fecha: new Date(2023, 5, 22),
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
        fechaInicio: 20230626,
        fechaFin: 20230702,
        teorica: {
          fecha: new Date(2023, 5, 27),
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
          fecha: new Date(2023, 5, 29),
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
