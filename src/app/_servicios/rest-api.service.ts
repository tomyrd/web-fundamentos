import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RestApiService {

	constructor(private http: HttpClient) {
	}
	
	getFiles(tipo: string) {
		var tok = ['github_pat_', environment.token1, environment.token2];
		const headers = new HttpHeaders().set('Authorization', 'Bearer ' + tok.join(''));
		return this.http.get("https://api.github.com/repos/tomyrd/web-fundamentos/contents/material/"+tipo+"?ref=main", { headers });
	}

	getMaterial() {
		return environment.material;
	}

	getApuntes() {
		return environment.apuntes;
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

	getAlgotron() {
		return environment.algotron;
	}

	getSlack() {
		return "https://fundamendez.slack.com/";
	}

	getInstagram() {
		return "https://www.instagram.com/algoritmos.mendez/";
	}

	getRPL() {
		return "http://www.myrpl.ar/";
	}
}
