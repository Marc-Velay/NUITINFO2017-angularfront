import { Component, OnInit } from '@angular/core';

import { GeolocationService }     from '../geolocation.service'

import {Coordinates} from '../coordinates.model';

const apiKey = 'AIzaSyAvJttct4N_pR-09stN3CHlGvBqy8f5be4';

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.component.html',
  styleUrls: ['./geoloc.component.css'],
  providers: [GeolocationService]
})

export class GeolocComponent implements OnInit {
  title: string = 'Paris';
  lat: number = 48.8190373;
  lng: number = 2.3696422;
  coords: Coordinates;

  constructor(private geolocService: GeolocationService) { }

  ngOnInit() {
    this.geolocService.getLocation().subscribe(position => function(position) {
        this.lat = position.latitude;
        this.lng = position.longitude;
      }
    );
  }

}
