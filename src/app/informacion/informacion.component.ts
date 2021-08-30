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
			{ nombre: '1C 2021', url: '/assets/docs/encuestas/encuesta_2021_1C.html'},
			{ nombre: '2C 2020', url: '/assets/docs/encuestas/encuesta_2020_2C.html'},
			{ nombre: '1C 2020', url: '/assets/docs/encuestas/encuesta_2020_1C.html'},
			{ nombre: '2C 2019', url: '/assets/docs/encuestas/encuesta_2019_2C.html'},
			{ nombre: '1C 2019', url: '/assets/docs/encuestas/encuesta_2019_1C.html'},
			{ nombre: '2C 2018', url: '/assets/docs/encuestas/encuesta_2018_2C.html'},
			{ nombre: '1C 2018', url: '/assets/docs/encuestas/encuesta_2018_1C.html'},
			{ nombre: '2C 2017', url: '/assets/docs/encuestas/encuesta_2017_2C.html'},
			{ nombre: '1C 2017', url: '/assets/docs/encuestas/encuesta_2017_1C.html'},
		];
		this.encuestas = encuestas;
		this.selectedSurvey = encuestas[0].url;
  }

}
