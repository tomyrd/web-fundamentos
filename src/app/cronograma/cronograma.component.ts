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
        fechaInicio: 20240311,
        fechaFin: 20240315,
        teorica: {
          fecha: new Date(2024, 2, 12),
          temas: [
            "Compilación vs Interpretación",
            "Variables, Constantes, Literales",
            "Tipos de Datos",
            "Hola Mundo!",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 2, 14),
          temas: [
            "Estructuras de Control", 
            "Compilación",
            "Tipos de Datos",
            "printf() - scanf()",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 2,
        fechaInicio: 20240318,
        fechaFin: 20240322,
        teorica: {
          fecha: new Date(2024, 2, 19),
          temas: [
            "Funciones",
            "Pasaje por Valor y Referencia",
            "Buenas Prácticas",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 2, 21),
          temas: [
            "Funciones",
            "Pasaje por Valor y Referencia",
            "Buenas Prácticas",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 3,
        fechaInicio: 20240325,
        fechaFin: 20240329,
        teorica: {
          fecha: new Date(2024, 2, 26),
          temas: [
            "Arreglos",
            "Matrices",
            "Punteros"
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 2, 28),
          temas: [],
          hitos: [],
          esFeriado: true,
          esVirtual: false,
        },
      },
      {
        numero: 4,
        fechaInicio: 20240401,
        fechaFin: 20240405,
        teorica: {
          fecha: new Date(2024, 3, 2),
          temas: [],
          hitos: [],
          esFeriado: true,
          esVirtual: true,
        },
        practica: {
          fecha: new Date(2024, 3, 4),
          temas: [
            "Busqueda Lineal", 
            "Eliminación",
            "Operaciones Básicas con Arreglos",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 5,
        fechaInicio: 20240408,
        fechaFin: 20240412,
        teorica: {
          fecha: new Date(2024, 3, 9),
          temas: [
            "Bibliotecas",
            "Registros",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: new Date(2024, 3, 11),
          temas: [
            "Bibliotecas",
            "Registros",
          ],
          hitos: [
            {
              titulo: 'Presentación TP1',
              tipo: 'presentacion-tp',
            },
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 6,
        fechaInicio: 20240415,
        fechaFin: 20240419,
        teorica: {
          fecha: new Date(2024, 3, 16),
          temas: [
            "Strings",
            "Debugging",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: new Date(2024, 3, 18),
          temas: [
            "Strings",
            "Estructuras Anidadas",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 7,
        fechaInicio: 20240422,
        fechaFin: 20240426,
        teorica: {
          fecha: new Date(2024, 3, 23),
          temas: [
            'Aritmética de Punteros',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 3, 25),
          temas: [
            'Aritmética de Punteros',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 8,
        fechaInicio: 20240429,
        fechaFin: 20240503,
        teorica: {
          fecha: new Date(2024, 3, 30),
          temas: [
            'Memoria Dinámica',
            'Malloc y Free',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 4, 2),
          temas: [
            'Memoria Dinámica',
            'Malloc y Free',
          ],
          hitos: [
            {
              titulo: 'Entrega TP1',
              tipo: 'entrega-tp',
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 9,
        fechaInicio: 20240506,
        fechaFin: 20240510,
        teorica: {
          fecha: new Date(2024, 4, 7),
          temas: [
            'Ordenamiento',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: new Date(2024, 4, 9),
          temas: [
            'Ordenamiento',
          ],
          hitos: [
            {
              titulo: 'Repaso Parcial',
              tipo: 'otros',
            },
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 10,
        fechaInicio: 20240513,
        fechaFin: 20240517,
        teorica: {
          fecha: new Date(2024, 4, 14),
          temas: [],
          hitos: [
            {
              titulo: 'Parcial',
              tipo: 'parcial',
            },],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 4, 16),
          temas: [],
          hitos: [
            {
              titulo: 'Presentación TP2',
              tipo: 'presentacion-tp',
            },
            {
              titulo: 'Reentrega TP1',
              tipo: 'entrega-tp',
            },
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 11,
        fechaInicio: 20240520,
        fechaFin: 20240524,
        teorica: {
          fecha: new Date(2024, 4, 21),
          temas: [
            'Malloc y Free 2.0',
            'Vector Dinámico',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 4, 23),
          temas: [
            'Malloc y Free 2.0',
            'Vector Dinámico',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 12,
        fechaInicio: 20240527,
        fechaFin: 20240531,
        teorica: {
          fecha: new Date(2024, 4, 28),
          temas: [
            'Recursividad',
            'Búsqueda Binaria',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 4, 30),
          temas: [
            'Recursividad',
            'Búsqueda Binaria',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 13,
        fechaInicio: 20240603,
        fechaFin: 20240607,
        teorica: {
          fecha: new Date(2024, 5, 4),
          temas: [
            'Recursividad 2.0',
            'Operaciones con Vectores',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 5, 6),
          temas: [
            'Recursividad 2.0',
            'Operaciones con Vectores',
          ],
          hitos: [
            {
              titulo: 'Entrega TP2',
              tipo: 'entrega-tp',
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 14,
        fechaInicio: 20240610,
        fechaFin: 20240614,
        teorica: {
          fecha: new Date(2024, 5, 11),
          temas: [
            'Archivos de Texto en Python',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: new Date(2024, 5, 13),
          temas: [
            'Archivos de Texto en Python',
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 15,
        fechaInicio: 20240617,
        fechaFin: 20240621,
        teorica: {
          fecha: new Date(2024, 5, 18),
          temas: [
            'Archivos CSV en Python'
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: new Date(2024, 5, 20),
          temas: [],
          hitos: [
            {
              titulo: 'Reentrega TP2',
              tipo: 'entrega-tp',
            },
            {
              titulo: 'Video Ejercicios de CSV',
              tipo: 'otros',
            },
          ],
          esFeriado: true,
          esVirtual: true,
        },
      },
      {
        numero: 16,
        fechaInicio: 20240624,
        fechaFin: 20240628,
        teorica: {
          fecha: new Date(2024, 5, 25),
          temas: [],
          hitos: [
            {
              titulo: '1er recuperatorio parcial',
              tipo: 'parcial',
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: new Date(2024, 5, 27),
          temas: [],
          hitos: [
            {
              titulo: 'Retrospectiva',
              tipo: 'otros',
            },
          ],
          esFeriado: false,
          esVirtual: false,
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
