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
        fechaInicio: "20250818",
        fechaFin: "20250824",
        teorica: {
          fecha: "2025-08-19",
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
          esVirtual: true,
        },
        practica: {
          fecha: "2025-08-21",
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
        fechaInicio: "20250825",
        fechaFin: "20250831",
        teorica: {
          fecha: "2025-08-26",
          temas: ["Buenas Prácticas", "Vectores", "Inserción", "Eliminación", "Búsqueda lineal"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-08-28",
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
        fechaInicio: "20250901",
        fechaFin: "20250907",
        teorica: {
          fecha: "2025-09-02",
          temas: ["Matrices", "Punteros", "Structs"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-09-04",
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
        fechaInicio: "20250908",
        fechaFin: "20250914",
        teorica: {
          fecha: "2025-09-09",
          temas: ["Bibliotecas", "Strings"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-09-11",
          temas: [],
          hitos: [
            {
              titulo: "Laboratorio",
              tipo: "otros",
            },
            {
              titulo: "Presentación TP1",
              tipo: "presentacion-tp",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 5,
        fechaInicio: "20250915",
        fechaFin: "20250921",
        teorica: {
          fecha: "2025-09-16",
          temas: ["Recursividad", "Búsqueda binaria"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-09-18",
          temas: ["Recursividad", "Búsqueda binaria"],
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
        fechaInicio: "20250922",
        fechaFin: "20250928",
        teorica: {
          fecha: "2025-09-23",
          temas: ["Debugging"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-09-25",
          temas: ["Recursividad 2.0", "Debugging"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 7,
        fechaInicio: "20250929",
        fechaFin: "20251005",
        teorica: {
          fecha: "2025-09-30",
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
          fecha: "2025-10-02",
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
      },
      {
        numero: 8,
        fechaInicio: "20251006",
        fechaFin: "20251012",
        teorica: {
          fecha: "2025-10-07",
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
          fecha: "2025-10-09",
          temas: ["Repaso para el parcial"],
          hitos: [
            {
              titulo: "Laboratorio",
              tipo: "otros",
            },
            {
              titulo: "Entrega TP1",
              tipo: "entrega-tp",
            },
          ],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 9,
        fechaInicio: "20251013",
        fechaFin: "20251019",
        teorica: {
          fecha: "2025-10-14",
          temas: ["Repaso para parcial"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-10-16",
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
        fechaInicio: "20251020",
        fechaFin: "20251026",
        teorica: {
          fecha: "2025-10-21",
          temas: ["realloc", "void *", "Valgrind", "TDAs", "Vector dinámico"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-10-23",
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
        fechaInicio: "20251027",
        fechaFin: "20251102",
        teorica: {
          fecha: "2025-10-28",
          temas: ["Manejo de archivos de texto en C", "CSV"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-10-30",
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
        fechaInicio: "20251103",
        fechaFin: "20251109",
        teorica: {
          fecha: "2025-11-04",
          temas: [
            "Lineas de comando",
            "Operaciones con archivos",
            "Mezcla",
            "Unión",
            "Intersección",
            "Diferencias"
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-11-06",
          temas: ["Archivos", "TDAs"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
      },
      {
        numero: 13,
        fechaInicio: "20251110",
        fechaFin: "20251116",
        teorica: {
          fecha: "2025-11-11",
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
          fecha: "2025-11-13",
          temas: [
            "Operaciones con archivos",
            "Mezcla",
            "Unión",
            "Intersección",
            "Diferencias"
          ],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
      },
      {
        numero: 14,
        fechaInicio: "20251117",
        fechaFin: "20251123",
        teorica: {
          fecha: "2025-11-18",
          temas: ["TDAs", "Pila", "Cola", "Lista enlazada"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-11-20",
          temas: ["TDAs", "Pila", "Cola", "Lista enlazada"],
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
        fechaInicio: "20251124",
        fechaFin: "20251130",
        teorica: {
          fecha: "2025-11-25",
          temas: ["Ejercicios de final"],
          hitos: [],
          esFeriado: false,
          esVirtual: true,
        },
        practica: {
          fecha: "2025-11-27",
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
        fechaInicio: "20251201",
        fechaFin: "20251207",
        teorica: {
          fecha: "2025-12-02",
          temas: ["???"],
          hitos: [],
          esFeriado: false,
          esVirtual: false,
        },
        practica: {
          fecha: "2025-12-04",
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
