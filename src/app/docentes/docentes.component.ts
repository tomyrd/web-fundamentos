import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'algo1-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  docentes: any;

  constructor() { }

  ngOnInit(): void {
    this.docentes = _.chunk([
      { name: "Agus", url1: "assets/img/docentes/agusB1.jpg", url2: "assets/img/docentes/agusB2.jpg" },
      { name: "Agus", url1: "assets/img/docentes/agusF1.jpg", url2: "assets/img/docentes/agusF2.jpg" },
      { name: "Ampi", url1: "assets/img/docentes/ampi1.jpg", url2: "assets/img/docentes/ampi2.jpg" },
      { name: "Ari", url1: "assets/img/docentes/ari1.jpg", url2: "assets/img/docentes/ari2.jpg" },
      { name: "Clara", url1: "assets/img/docentes/clara1.jpg", url2: "assets/img/docentes/clara2.jpg" },
      { name: "Dulci", url1: "assets/img/docentes/dulci1.jpg", url2: "assets/img/docentes/dulci2.jpg" },
      { name: "Flor", url1: "assets/img/docentes/flor1.jpg", url2: "assets/img/docentes/flor2.jpg" },
      { name: "Juani", url1: "assets/img/docentes/juani1.jpg", url2: "assets/img/docentes/juani2.jpg" },
      { name: "Manu", url1: "assets/img/docentes/manub1.jpg", url2: "assets/img/docentes/manub2.jpg" },
      { name: "Manu", url1: "assets/img/docentes/manuc1.jpg", url2: "assets/img/docentes/manuc2.jpg" },
      { name: "Marcos", url1: "assets/img/docentes/marcos1.jpg", url2: "assets/img/docentes/marcos2.jpg" },
      { name: "Martu", url1: "assets/img/docentes/martu1.jpg", url2: "assets/img/docentes/martu2.jpg" },
      { name: "Nacho", url1: "assets/img/docentes/nachito1.jpg", url2: "assets/img/docentes/nachito2.jpg" },
      { name: "Nacho", url1: "assets/img/docentes/nacho1.jpg", url2: "assets/img/docentes/nacho2.jpg" },
      { name: "Nico", url1: "assets/img/docentes/nico1.jpg", url2: "assets/img/docentes/nico2.jpg" },
      { name: "Sol", url1: "assets/img/docentes/sol1.jpg", url2: "assets/img/docentes/sol2.jpg" },
      { name: "Tomi", url1: "assets/img/docentes/tomi1.jpg", url2: "assets/img/docentes/tomi2.jpg" },
      { name: "Valen", url1: "assets/img/docentes/valen1.jpg", url2: "assets/img/docentes/valen2.jpg" },
    ], 5);
  }

}
