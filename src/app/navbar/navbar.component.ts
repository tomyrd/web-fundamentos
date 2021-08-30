import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_servicios/rest-api.service';

@Component({
  selector: 'algo1-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  chanutron2021: string;
  rpl: string;
  slack: string;
  canalYouTube: string;
  instagram: string;
  activeMenu = false;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {

		this.chanutron2021 = this.restApi.getChanutron2021();
		this.rpl = this.restApi.getRPL();
		this.slack = this.restApi.getSlack();
		this.canalYouTube = this.restApi.getCanalYouTube();
		this.instagram = this.restApi.getInstagram();
  }

}
