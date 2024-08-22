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
          "numero": 1,
          "fechaInicio": "20240819",
          "fechaFin": "20240823",
          "teorica": {
              "fecha": "2024-08-20",
              "temas": ["Lenguaje C", "Variables, constantes y literales", "Tipos de dato", "Hola Mundo!", "Estructuras de Control"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true,
          },
          "practica": {
              "fecha": "2024-08-22",
              "temas": ["Compilación", "Entrada y Salida", "Variables, constantes y literales", "Tipos de dato", "Estructuras de Control"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 2,
          "fechaInicio": "20240826",
          "fechaFin": "20240830",
          "teorica": {
              "fecha": "2024-08-27",
              "temas": ["Funciones", "Buenas prácticas", "Pasaje por valor y por referencia"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-08-29",
              "temas": ["Funciones", "Buenas prácticas", "Pre y post condiciones"],
              "hitos": [
                {
                  "titulo":"Laboratorio",
                  "tipo":"otros"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 3,
          "fechaInicio": "20240902",
          "fechaFin": "20240906",
          "teorica": {
              "fecha": "2024-09-03",
              "temas": ["Vectores", "Matrices", "Punteros"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-09-05",
              "temas": ["Insertar, eliminar y buscar", "Vectores", "Matrices"],
              "hitos": [
                {
                  "titulo":"Presentación TP0",
                  "tipo":"presentacion-tp"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 4,
          "fechaInicio": "20240909",
          "fechaFin": "20240913",
          "teorica": {
              "fecha": "2024-09-10",
              "temas": ["Bibliotecas", "Registros"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          },
          "practica": {
              "fecha": "2024-09-12",
              "temas": ["Bibliotecas", "Registros"],
              "hitos": [
                {
                  "titulo":"Entrega TP0",
                  "tipo":"entrega-tp"
                },
                {
                  "titulo":"Presentación TP1",
                  "tipo":"presentacion-tp"
                },
              ],              "esFeriado": false,
              "esVirtual": true
          }
      },
      {
          "numero": 5,
          "fechaInicio": "20240916",
          "fechaFin": "20240920",
          "teorica": {
              "fecha": "2024-09-17",
              "temas": ["Strings", "Busqueda binaria"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-09-19",
              "temas": ["Strings", "Bibliotecas", "Registros"],
              "hitos": [
                {
                  "titulo":"Laboratorio",
                  "tipo":"otros"
                },
              ],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 6,
          "fechaInicio": "20240923",
          "fechaFin": "20240927",
          "teorica": {
              "fecha": "2024-09-24",
              "temas": ["Recursividad"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-09-26",
              "temas": ["Recursividad", "Busqueda binaria"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 7,
          "fechaInicio": "20240930",
          "fechaFin": "20241004",
          "teorica": {
              "fecha": "2024-10-01",
              "temas": ["Aritmética de punteros", "Malloc y free", "Realloc"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-10-03",
              "temas": ["Recursividad", "Memoria dinámica"],
              "hitos": [
                {
                  "titulo":"Entrega TP1",
                  "tipo":"entrega-tp"
                },
              ],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 8,
          "fechaInicio": "20241007",
          "fechaFin": "20241011",
          "teorica": {
              "fecha": "2024-10-08",
              "temas": ["Burbujeo", "Selección", "Inserción"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-10-10",
              "temas": ["Ordenamientos", "Debugging"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 9,
          "fechaInicio": "20241014",
          "fechaFin": "20241018",
          "teorica": {
              "fecha": "2024-10-15",
              "temas": ["Mezcla", "Union", "Diferencias", "Intersección"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          },
          "practica": {
              "fecha": "2024-10-17",
              "temas": ["Repaso para el parcial"],
              "hitos": [
                {
                  "titulo":"Reentrega TP1",
                  "tipo":"entrega-tp"
                }
              ],
              "esFeriado": false,
              "esVirtual": true
          }
      },
      {
          "numero": 10,
          "fechaInicio": "20241021",
          "fechaFin": "20241025",
          "teorica": {
              "fecha": "2024-10-22",
              "temas": [],
              "hitos": [
                {
                  "titulo":"Parcial",
                  "tipo":"parcial"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-10-24",
              "temas": ["Operaciones con vectores"],
              "hitos": [
                {
                  "titulo":"Presentación TP2",
                  "tipo":"presentacion-tp"
                }
              ],
              "esFeriado": false,
              "esVirtual": true
          }
      },
      {
          "numero": 11,
          "fechaInicio": "20241028",
          "fechaFin": "20241101",
          "teorica": {
              "fecha": "2024-10-29",
              "temas": ["Valgrind", "TDAs", "Vector dinámico"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          },
          "practica": {
              "fecha": "2024-10-31",
              "temas": ["Vector dinámico"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          }
      },
      {
          "numero": 12,
          "fechaInicio": "20241104",
          "fechaFin": "20241108",
          "teorica": {
              "fecha": "2024-11-05",
              "temas": ["Pilas", "Colas", "Listas enlazadas"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-11-07",
              "temas": ["Listas enlazadas"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 13,
          "fechaInicio": "20241111",
          "fechaFin": "20241115",
          "teorica": {
              "fecha": "2024-11-12",
              "temas": [],
              "hitos": [
                {
                  "titulo":"1er Recuperatorio",
                  "tipo":"parcial"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-11-14",
              "temas": ["Pilas", "Colas"],
              "hitos": [
                {
                  "titulo":"Entrega TP2",
                  "tipo":"entrega-tp"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          }
      },
      {
          "numero": 14,
          "fechaInicio": "20241118",
          "fechaFin": "20241122",
          "teorica": {
              "fecha": "2024-11-19",
              "temas": ["Manejo de archivos de texto"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          },
          "practica": {
              "fecha": "2024-11-21",
              "temas": ["Manejo de archivos de texto"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          }
      },
      {
          "numero": 15,
          "fechaInicio": "20241125",
          "fechaFin": "20241129",
          "teorica": {
              "fecha": "2024-11-26",
              "temas": ["Archivos CSV"],
              "hitos": [],
              "esFeriado": false,
              "esVirtual": true
          },
          "practica": {
              "fecha": "2024-11-28",
              "temas": ["Archivos CSV"],
              "hitos": [
                {
                  "titulo":"Reentrega TP2",
                  "tipo":"entrega-tp"
                }
              ],
              "esFeriado": false,
              "esVirtual": true
          }
      },
      {
          "numero": 16,
          "fechaInicio": "20241202",
          "fechaFin": "20241206",
          "teorica": {
              "fecha": "2024-12-03",
              "temas": [],
              "hitos": [
                {
                  "titulo":"2do Recuperatorio",
                  "tipo":"parcial"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          },
          "practica": {
              "fecha": "2024-12-05",
              "temas": [],
              "hitos": [
                {
                  "titulo":"Retrospectiva",
                  "tipo":"otros"
                }
              ],
              "esFeriado": false,
              "esVirtual": false
          }
      }
  ];
  }

  next(): void {
    if (this.actual < this.cronograma.length) this.actual++;
  }

  previous(): void {
    if (this.actual > 0) this.actual--;
  }

}
