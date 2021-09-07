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

  constructor(
    public datepipe: DatePipe,
    public restApi: RestApiService) { }

  ngOnInit(): void {
    this.cronogramaURL = this.restApi.getCronogramaPdf();

    this.fecha = this.datepipe.transform(new Date(), 'yyyyMMdd');
    this.cronograma = [
      {numero: "1", fechaInicio: "20210906", fechaFin: "20210912", tema: "Introducción a la algoritmia y a la programación.", hitos: []},
      {numero: "2", fechaInicio: "20210913", fechaFin: "20210919", tema: "Codificación, compilación y ejecución. Estructuras de control.", hitos: []},
      {numero: "3", fechaInicio: "20210920", fechaFin: "20210926", tema: "Funciones y procedimientos. Pasaje de parámetros por valor.", hitos: []},
      {numero: "4", fechaInicio: "20210927", fechaFin: "20211003", tema: "Pasaje de parámetros por referencia. Buenas prácticas de programación.", hitos: []},
      {numero: "5", fechaInicio: "20211004", fechaFin: "20211010", tema: "Bibliotecas. Strings. Registros.", hitos: ["Presentación TP Parte 1"]},
      {numero: "6", fechaInicio: "20211011", fechaFin: "20211017", tema: "Vectores y matrices. Búsqueda lineal.", hitos: []},
      {numero: "7", fechaInicio: "20211018", fechaFin: "20211024", tema: "Eliminación de elementos. Estructuras anidadas.", hitos: []},
      {numero: "8", fechaInicio: "20211025", fechaFin: "20211031", tema: "Métodos de ordenamiento. Inserción ordenada.", hitos: ["Entrega TP Parte 1","Presentación TP Parte 2"]},
      {numero: "9", fechaInicio: "20211101", fechaFin: "20211107", tema: "Unión, intersección y diferencia. Recursividad.", hitos: []},
      {numero: "10", fechaInicio: "20211108", fechaFin: "20211114", tema: "Recursividad. Busqueda binaria", hitos: ["Reentrega TP Parte 1"]},
      {numero: "11", fechaInicio: "20211115", fechaFin: "20211121", tema: "Repaso.", hitos: ["Parcial"]},
      {numero: "12", fechaInicio: "20211122", fechaFin: "20211128", tema: "Archivos de texto. Acceso secuencial", hitos: ["Entrega TP Parte 2","Presentación TP Parte 3"]},
      {numero: "13", fechaInicio: "20211129", fechaFin: "20211205", tema: "Archivos de texto. Acceso secuencial", hitos: []},
      {numero: "14", fechaInicio: "20211206", fechaFin: "20211212", tema: "Mesa de debate con otros docentes. Algo1 en otro lenguaje.", hitos: ["Reentrega TP Parte 2","Entrega TP Parte 3"]},
      {numero: "15", fechaInicio: "20211213", fechaFin: "20211219", tema: "Retrospectiva.", hitos: ["1er recuperatorio parcial"]},
      {numero: "16", fechaInicio: "20211220", fechaFin: "20211226", tema: "", hitos: ["Reentrega TP Parte 3"]},
    ];
  }

  next(): void {
    if (this.actual < this.cronograma.length) this.actual++;
  }

  previous(): void {
    if (this.actual > 0) this.actual--;
  }

}
