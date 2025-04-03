import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { RestApiService } from "src/app/_servicios/rest-api.service";

@Component({
  selector: "algo1-cronograma",
  templateUrl: "./cronograma.component.html",
  styleUrls: ["./cronograma.component.scss"],
})
export class CronogramaComponent implements OnInit {
  cronograma: any;
  fecha: string;
  actual = 0;
  cronogramaURL: any;
  hitosTipos: Object;

  constructor(
    public datepipe: DatePipe,
    public restApi: RestApiService,
  ) {}

  ngOnInit(): void {
    this.cronogramaURL = this.restApi.getCronogramaPdf();

    this.fecha = this.datepipe.transform(new Date(), "yyyyMMdd");
    this.cronograma = [
      {
        numero: 1,
        fechaInicio: "20250310",
        fechaFin: "20250314",
        teorica: {
          fecha: "2025-03-11",
          temas: [
            "Lenguaje C",
            "Variables, constantes y literales",
            "Tipos de datos y operadores",
            "Estructuras de control",
            "Compilación",
            "printf y scanf",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-03-13",
          temas: [
            "Funciones",
            "Pasaje por valor y referencia",
            "Buenas prácticas",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 2,
        fechaInicio: "20250317",
        fechaFin: "20250321",
        teorica: {
          fecha: "2025-03-18",
          temas: ["Vectores", "Inserción", "Eliminación", "Búsqueda lineal"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-03-20",
          temas: [],
          hitos: [
            {
              titulo: "Laboratorio",
              tipo: "otros",
            },
            {
              titulo: "Presentación TP0",
              tipo: "presentacion-tp",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 3,
        fechaInicio: "20250324",
        fechaFin: "20250328",
        teorica: {
          fecha: "2025-03-25",
          temas: ["Matrices", "Punteros", "Structs"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-03-27",
          temas: ["Matrices", "Punteros", "Structs"],
          hitos: [
            {
              titulo: "Entrega TP0",
              tipo: "entrega-tp",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 4,
        fechaInicio: "20250331",
        fechaFin: "20250404",
        teorica: {
          fecha: "2025-04-01",
          temas: ["Recursividad", "Bibliotecas"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-04-03",
          temas: ["Recursividad", "Bibliotecas"],
          hitos: [
            {
              titulo: "Presentación TP1",
              tipo: "presentacion-tp",
            },
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 5,
        fechaInicio: "20250407",
        fechaFin: "20250411",
        teorica: {
          fecha: "2025-04-08",
          temas: ["Strings", "Búsqueda binaria"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-04-10",
          temas: ["Strings", "Búsqueda binaria"],
          hitos: [
            {
              titulo: "Laboratorio",
              tipo: "otros",
            }
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 6,
        fechaInicio: "20250414",
        fechaFin: "20250418",
        teorica: {
          fecha: "2025-04-15",
          temas: ["Debugging"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-04-17",
          temas: [],
          hitos: [],
          esFeriado: true,
          esVirtual: false,
        },
      },
      {
        numero: 7,
        fechaInicio: "20250421",
        fechaFin: "20250425",
        teorica: {
          fecha: "2025-04-22",
          temas: [
            "Ordenamientos",
            "Método de burbujeo",
            "Método de selección",
            "Método de inserción",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-04-24",
          temas: [
            "Debugging",
            "Ordenamientos",
            "Método de burbujeo",
            "Método de selección",
            "Método de inserción",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 8,
        fechaInicio: "20250428",
        fechaFin: "20250502",
        teorica: {
          fecha: "2025-04-29",
          temas: [
            "Memoria dinámica",
            "Aritmética de punteros",
            "malloc",
            "free",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-05-01",
          temas: [],
          hitos: [
            {
              titulo: "Entrega TP1",
              tipo: "entrega-tp",
            },
          ],
          esFeriado: true,
          esVirtual: false,
        },
      },
      {
        numero: 9,
        fechaInicio: "20250505",
        fechaFin: "20250509",
        teorica: {
          fecha: "2025-05-06",
          temas: ["Repaso para parcial"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-05-08",
          temas: [],
          hitos: [
            {
              titulo: "Parcial",
              tipo: "parcial",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 10,
        fechaInicio: "20250512",
        fechaFin: "20250516",
        teorica: {
          fecha: "2025-05-13",
          temas: ["realloc", "void *", "Valgrind", "TDAs", "Vector dinámico"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-05-15",
          temas: ["Memoria dinámica", "TDAs", "Vector dinámico"],
          hitos: [
            {
              titulo: "Reentrega TP1",
              tipo: "entrega-tp",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 11,
        fechaInicio: "20250519",
        fechaFin: "20250523",
        teorica: {
          fecha: "2025-05-20",
          temas: ["Manejo de archivos de texto en C", "CSV"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-05-22",
          temas: ["Archivos CSV"],
          hitos: [
            {
              titulo: "Presentación TP2",
              tipo: "presentacion-tp",
            },
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 12,
        fechaInicio: "20250526",
        fechaFin: "20250530",
        teorica: {
          fecha: "2025-05-27",
          temas: [
            "argv y argc",
            "Lineas de comando",
            "Operaciones con archivos",
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-05-29",
          temas: ["Archivos", "TDAs"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 13,
        fechaInicio: "20250602",
        fechaFin: "20250606",
        teorica: {
          fecha: "2025-06-03",
          temas: [],
          hitos: [
            {
              titulo: "1er Recuperatorio",
              tipo: "parcial",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-06-05",
          temas: ["Operaciones con archivos"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 14,
        fechaInicio: "20250609",
        fechaFin: "20250613",
        teorica: {
          fecha: "2025-06-10",
          temas: ["TDAs", "Pila", "Cola", "Lista"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-06-12",
          temas: ["TDAs", "Pila", "Cola", "Lista"],
          hitos: [
            {
              titulo: "Entrega TP2",
              tipo: "entrega-tp",
            },
          ],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 15,
        fechaInicio: "20250616",
        fechaFin: "20250620",
        teorica: {
          fecha: "2025-06-17",
          temas: ["Ejercicios de final"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-06-19",
          temas: [],
          hitos: [
            {
              titulo: "Laboratorio para final",
              tipo: "otros",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 16,
        fechaInicio: "20250623",
        fechaFin: "20250627",
        teorica: {
          fecha: "2025-06-24",
          temas: ["???"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-06-26",
          temas: [],
          hitos: [
            {
              titulo: "Reentrega TP2",
              tipo: "entrega-tp",
            },
            {
              titulo: "Retrospectiva",
              tipo: "otros",
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
