import { Component, ViewChild } from '@angular/core';
//import { AgmCoreModule } from '@agm/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsAPILoader, SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { GeoDataService } from './geo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Language Tree';

  geoArrayOfArrays: Array<any> = [];
  geoCodes: Array<any>;
  geoObject: Array<LatLngLiteral> = [];
  lat: number = 48.143889;
  lng: number = 17.109722;
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
            this.geoObject.push(tempCode);
          });
        // console.log("geoObject is: " + this.geoObject);
        console.log(this.geoObject);
        this.lat = this.geoObject[0].lat;
        this.lng = this.geoCodes[1][0];
        this.geoObject = [
         { lat: 0,  lng: 10 },
         { lat: 0,  lng: 20 },
         { lat: 10, lng: 20 },
         { lat: 10, lng: 10 },
         { lat: 0,  lng: 10 }
        ]
      }
  },
    error =>  {
     this.errorMessage = <any>error
    });
  }
}
