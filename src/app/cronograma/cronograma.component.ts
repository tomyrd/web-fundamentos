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
        fechaInicio: 20220321,
        fechaFin: 20220327,
        teorica: {
          fecha: new Date(2022, 2, 22),
          temas: [
            'Introducción a la materia',
            'Algoritmos',
            'Variables, constantes y literales',
            'Datos de entrada y salida',
            'Pre y pos condiciones',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 2, 24),
          temas: [],
          hitos: [],
          esFeriado: true,
        },
      },
      {
        numero: 2,
        fechaInicio: 20220328,
        fechaFin: 20220403,
        teorica: {
          fecha: new Date(2022, 2, 29),
          temas: [
            'Tipos de dato y operadores',
            'Codificación, compilación y ejecución',
            'Estructuras de control',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 2, 31),
          temas: [
            'Pre y pos condiciones',
            'Estructuras de control',
            'Elaboración de algoritmos',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 3,
        fechaInicio: 20220404,
        fechaFin: 20220410,
        teorica: {
          fecha: new Date(2022, 3, 5),
          temas: [
            'Funciones y procedimientos',
            'Pasaje de parámetros por valor y por referencia',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 3, 7),
          temas: [
            'Funciones y procedimientos',
            'Pasaje de parámetros por valor y por referencia',
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
        fechaInicio: 20220411,
        fechaFin: 20220417,
        teorica: {
          fecha: new Date(2022, 3, 12),
          temas: [
            'Pasaje de parámetros por referencia',
            'Buenas prácticas de programación',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 3, 14),
          temas: [],
          hitos: [],
          esFeriado: true,
        },
      },
      {
        numero: 5,
        fechaInicio: 20220418,
        fechaFin: 20220424,
        teorica: {
          fecha: new Date(2022, 3, 19),
          temas: [
            'Bibliotecas',
            'Registros',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 3, 21),
          temas: [
            'Bibliotecas',
            'Registros',
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
        fechaInicio: 20220425,
        fechaFin: 20220501,
        teorica: {
          fecha: new Date(2022, 3, 26),
          temas: [
            'Vectores y matrices',
            'Búsqueda lineal',
            'Strings',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 3, 28),
          temas: [
            'Vectores y matrices',
            'Búsqueda lineal',
            'Strings',
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
        fechaInicio: 20220502,
        fechaFin: 20220508,
        teorica: {
          fecha: new Date(2022, 4, 3),
          temas: [
            'Eliminación de elementos',
            'Estructuras anidadas',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 4, 5),
          temas: [
            'Eliminación de elementos',
            'Estructuras anidadas',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 8,
        fechaInicio: 20220509,
        fechaFin: 20220515,
        teorica: {
          fecha: new Date(2022, 4, 10),
          temas: [
            'Métodos de ordenamiento',
            'Inserción ordenada',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 4, 12),
          temas: [
            'Métodos de ordenamiento',
            'Inserción ordenada',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 9,
        fechaInicio: 20220516,
        fechaFin: 20220522,
        teorica: {
          fecha: new Date(2022, 4, 17),
          temas: [
            'Búsqueda binaria',
            'Recursividad',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 4, 19),
          temas: [
            'Búsqueda binaria',
            'Recursividad',
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
        numero: 10,
        fechaInicio: 20220523,
        fechaFin: 20220529,
        teorica: {
          fecha: new Date(2022, 4, 24),
          temas: [
            'Recursividad',
            'Unión, intersección y diferencia',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 4, 26),
          temas: [
            'Recursividad',
            'Unión, intersección y diferencia',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 11,
        fechaInicio: 20220530,
        fechaFin: 20220605,
        teorica: {
          fecha: new Date(2022, 4, 31),
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
          fecha: new Date(2022, 5, 2),
          temas: [],
          hitos: [
            {
              titulo: 'Parcial',
              tipo: 'parcial',
            },
            {
              titulo: 'Reentrega TP2',
              tipo: 'entrega-tp',
            },
            
          ],
          esFeriado: false,
        },
      },
      {
        numero: 12,
        fechaInicio: 20220606,
        fechaFin: 20220612,
        teorica: {
          fecha: new Date(2022, 5, 7),
          temas: [
            'Archivos de texto',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 5, 9),
          temas: [
            'Archivos de texto',
          ],
          hitos: [
            {
              titulo: 'Presentación TP3',
              tipo: 'presentacion-tp',
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 13,
        fechaInicio: 20220613,
        fechaFin: 20220619,
        teorica: {
          fecha: new Date(2022, 5, 14),
          temas: [
            'Procesamiento de archivos',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 5, 16),
          temas: [
            'Procesamientos de archivos',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 14,
        fechaInicio: 20220620,
        fechaFin: 20220626,
        teorica: {
          fecha: new Date(2022, 5, 21),
          temas: [
            'Algo1 en otro lenguaje',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 5, 23),
          temas: [
            'Algo1 en otro lenguaje',
          ],
          hitos: [],
          esFeriado: false,
        },
      },
      {
        numero: 15,
        fechaInicio: 20220627,
        fechaFin: 20220703,
        teorica: {
          fecha: new Date(2022, 5, 28),
          temas: [
            'Mesa de debate con otros docentes',
          ],
          hitos: [],
          esFeriado: false,
        },
        practica: {
          fecha: new Date(2022, 5, 30),
          temas: [],
          hitos: [
            {
              titulo: 'Entrega TP3',
              tipo: 'entrega-tp',
            }
          ],
          esFeriado: false,
        },
      },
      {
        numero: 16,
        fechaInicio: 20220704,
        fechaFin: 20220710,
        teorica: {
          fecha: new Date(2022, 6, 5),
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
          fecha: new Date(2022, 6, 7),
          temas: [],
          hitos: [
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
