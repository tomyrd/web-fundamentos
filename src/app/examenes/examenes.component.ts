import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_servicios/rest-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'algo1-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss'],
})
export class ExamenesComponent implements OnInit {
  parciales: any;
  finales: any;
  allParciales: any;
  allFinales: any;
  parcialesSearch: string = '';
  finalesSearch: string = '';

  constructor(public restApi: RestApiService) {}

  ngOnInit(): void {
    this.getParciales();
    this.getFinales();
  }

  getParciales() {
    this.restApi.getFiles('parciales').subscribe((data: any) => {
      var parciales = data;
      for (var i = 0; i < parciales.length; i++) {
        let nombre = parciales[i].name.split('_');
        parciales[i].nombre = `${nombre.slice(0, 2).join(' ').split('.')[0]} - ${
          nombre.slice(2).join(' ').split('.')[0]
        }`;
        parciales[i].url = this.restApi.getApiUrl() + '/parciales/' + parciales[i].name;
      }
      this.allParciales = _.orderBy(parciales, 'nombre', 'desc');
      this.parciales = this.allParciales;
    });
  }

  getFinales() {
    this.restApi.getFiles('finales').subscribe((data: any) => {
      var finales = data;
      for (var i = 0; i < finales.length; i++) {
        let nombre = finales[i].name.split('_');
        finales[i].nombre = `${nombre.slice(0, 2).join(' ').split('.')[0]} - ${
          nombre.slice(2).join(' ').split('.')[0]
        }`;
        finales[i].url = this.restApi.getApiUrl() + '/finales/' + finales[i].name;
      }
      this.allFinales = _.orderBy(finales, 'nombre', 'desc');
      this.finales = this.allFinales;
    });
  }


  filtrarParciales(search) {
    this.parciales = _.filter(this.allParciales, function (obj) {
      return (
        search.length == 0 ||
        obj.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
  }

  filtrarFinales(search) {
    this.finales = _.filter(this.allFinales, function (obj) {
      return (
        search.length == 0 ||
        obj.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
  }

}
