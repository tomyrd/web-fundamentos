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
  tps: any;
	apuntes: any;
  allApuntes: any;
	allClases: any;
  allTps: any;
  clases: any;
  clasesSearch: string = "";
  clasesCategory: string = "";
  apuntesSearch: string = "";
  tpsSearch: string = "";

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.getApuntes();
		this.getClases();
    this.getTps();
  }

  getApuntes() {
		this.restApi.getFiles("apuntes").subscribe((data: any) => {
      this.apuntes = data.map((file: any) => {
        return {
            nombre: file.name.split('.').slice(0, -1).join('.'),
            url: file.download_url
        }
      });
      this.allApuntes = this.apuntes;
    });
	}

	getClases() {
    this.clases = [];
    this.allClases = [];

    this.restApi.getFiles("clases").subscribe((data: any) => {
      this.clases = data.map((file: any) => {
        return {
          tipo: file.name.split("_")[0],
          nombre: file.name.split("_").slice(1).join(" ").split(".")[0],
          url: file.download_url
        }
      });
      this.allClases = _.orderBy(this.clases, ['nombre', 'tipo'], ['desc', 'desc']);
      this.clases = this.allClases;
    });
	}

  getTps() {
		// this.restApi.getFiles("tps").subscribe((data: any) => {
    //   this.tps = data.map((file: any) => {
    //     return {
    //       nombre: file.name,
    //       url: file.download_url
    //     }
    //   });
    //   this.allTps = this.tps;
    // });
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

  filtrarTps(search){
    this.tps = _.filter(this.allTps, function(obj) {
      return (search.length == 0 || obj.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    });
  }
}
