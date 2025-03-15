import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_servicios/rest-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'algo1-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

	horarios: any;
	regimenCursada: string;
	encuestas: any;
	selectedSurvey: string;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    var horarios = [
			{ tipo: 'Teórica', dia: 'Martes', hora: '8:00 a 11:00', aula: '-'},
			{ tipo: 'Práctica', dia: 'Jueves', hora: '8:00 a 11:00', aula: '-'},
		];
		this.horarios = horarios;

		this.regimenCursada = this.restApi.getRegimenPdf();

		var encuestas = [
			{ nombre: '2C 2024', url: '/assets/docs/encuestas/encuesta_2024_2C.html'},
			{ nombre: '1C 2024', url: '/assets/docs/encuestas/encuesta_2024_1C.html'},
		];
		this.encuestas = encuestas;
		this.selectedSurvey = encuestas[0].url;
  }

}
