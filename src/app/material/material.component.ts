import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_servicios/rest-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'algo1-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  teoricas: any;
	practicas: any;
	apuntes: any;
  allApuntes: any;
	allClases: any;
  clases: any;
  clasesSearch: string = "";
  clasesCategory: string = "";
  apuntesSearch: string = "";

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.getApuntes();
		this.getClases();
  }

  getApuntes() {
		this.restApi.getFiles("apuntes").subscribe((data: {}) => {
			this.apuntes = data;
			for (var i = 0; i < this.apuntes.length; i++) {
				let nombre = this.apuntes[i].name.split("_");
				this.apuntes[i].nombre = nombre.join(" ").replace('.pdf', '');
				this.apuntes[i].url = this.restApi.getApiUrl() + '/apuntes/' + this.apuntes[i].name;
			}
      this.allApuntes = this.apuntes
		});
	}

	getClases() {
		this.restApi.getFiles("clases").subscribe((data: any) => {
			var clases = data;
			for (var i = 0; i < clases.length; i++) {
				let nombre = clases[i].name.split("_");
				clases[i].tipo = nombre[2];
				nombre.splice(2,2);
				clases[i].nombre = nombre.join(" ").split(".")[0];
				clases[i].url = this.restApi.getApiUrl() + '/clases/' + clases[i].name;
			}
			this.allClases = _.orderBy(clases, ['tipo', 'nombre'], ['desc', 'desc']);
      this.clases = this.allClases;
		});
	}

  changeCategory(category: string){
    this.clasesCategory = category;
    this.filtrarClases(this.clasesCategory, this.clasesSearch);
  }

  filtrarClases(category, search){
    this.clases = _.filter(this.allClases, function(obj) {
      return ((search.length == 0 || obj.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1) && (category.length == 0 || obj.tipo == category));
    });

  }
  
  filtrarApuntes(search){
    this.apuntes = _.filter(this.allApuntes, function(obj) {
      return (search.length == 0 || obj.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    });
  }
}
