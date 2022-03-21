import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RestApiService {

	constructor(private http: HttpClient) {
	}

	getFiles(tipo: string) {
		return this.http.get(environment.apiUrl + '/' + tipo);
	}

	getCronograma() {
		return this.http.get(environment.calendarUrl + '/events?code=7540&date=2021-09-07');
	}
	
	getCronogramaPdf() {
		return environment.cronograma;
	}

	getRegimenPdf() {
		return environment.regimenDeCursada;
	}

	getApiUrl() {
		return environment.apiUrl;
	}

	getCanalYouTube() {
		return environment.canalYouTube;
	}

	getChanutron2021() {
		return environment.chanutron2021;
	}

	getDiscord() {
		return "https://discord.com/channels/935239378777813083/935239379251761182";
	}

	getInstagram() {
		return "https://www.instagram.com/algoritmos.mendez/";
	}

	getRPL() {
		return "http://www.myrpl.ar/";
	}
}
