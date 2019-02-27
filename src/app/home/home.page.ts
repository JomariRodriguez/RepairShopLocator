import { Component } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat: string = '';
  lng: string = '';
  title: string = '';

  location: Object;

  constructor(private map:MapsService) {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.title = data.country_name; 
    })
  }

}
