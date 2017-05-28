import { Component, ViewChild } from '@angular/core';
//import { AgmCoreModule } from '@agm/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsAPILoader, SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { GeoDataService } from './geo-data.service';
import * as Immutable from 'immutable';
//import Immutable = require('immutable');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Language Tree';

  geoArrayOfArrays: Array<any> = [];
  geoCodes: Array<any>;
  tempGeoObject: Array<LatLngLiteral> = [];
  geoObject: Array<LatLngLiteral> = Immutable.fromJS({});
//  geoObject: Array<LatLngLiteral> = Immutable.Map([{'lat': 0, 'lng':0}]);
//  geoObject: Array<LatLngLiteral> = [];
  lat: number = 48.143889;
  lng: number = 17.109722;
  centre: LatLngLiteral = {lat: this.lat, lng: this.lng};
  zoom: number = 4;

  errorMessage: any;

  constructor(private geoDataService: GeoDataService) { }

  ngOnInit() {
    this.geoDataService.geoArraySubject
      .subscribe(geoArrays => {
        this.geoArrayOfArrays = geoArrays;
        console.log("In GEO subscribe function");
        console.log("geoArrayOfArrays");
        console.log(this.geoArrayOfArrays);
        if (this.geoArrayOfArrays.length>0) {
          this.geoCodes =  this.geoArrayOfArrays[0].features[0].geometry.coordinates[0];
          this.geoCodes.forEach(latLngPair => {
            // console.log("typeof latLngPair[0] is " + typeof latLngPair[0]);
            // console.log("latLngPair[1] is " + latLngPair[1]);
            var tempCode: LatLngLiteral = {"lat":0,"lng":0};
            tempCode.lat = latLngPair[1];
            tempCode.lng = latLngPair[0];
            this.tempGeoObject.push(tempCode);
          });
        // console.log("geoObject is: " + this.geoObject);
        this.geoObject = this.tempGeoObject;
        console.log(this.geoObject);
        this.lat = this.geoObject[0].lat;
        this.lng = this.geoObject[0].lng;
        // this.geoObject = [
        //  { lat: 0,  lng: 10 },
        //  { lat: 0,  lng: 20 },
        //  { lat: 10, lng: 20 },
        //  { lat: 10, lng: 10 },
        //  { lat: 0,  lng: 10 }
        // ]
      }
  },
    error =>  {
     this.errorMessage = <any>error
    });
  }
}
