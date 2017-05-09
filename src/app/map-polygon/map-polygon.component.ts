import { Component } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';

@Component({
 selector: 'my-map-polygon',
 styles: [`
   .sebm-map-container {
     height: 300px;
   }
`],
 template: `
   <sebm-map class="sebm-map-container" [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     <sebm-map-polygon [paths]="paths">
     </sebm-map-polygon>
   </sebm-map>
 `
})
export class MapPolygonComponent {
  lat: number = 0;
  lng: number = 0;
  zoom: number = 10;
  paths: Array<LatLngLiteral> = [
    { lat: 0,  lng: 10 },
    { lat: 0,  lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0,  lng: 10 }
  ]
  // Nesting paths will create a hole where they overlap;
  nestedPaths: Array<Array<LatLngLiteral>> = [[
    { lat: 0,  lng: 10 },
    { lat: 0,  lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0,  lng: 10 }
  ], [
    { lat: 0, lng: 15 },
    { lat: 0, lng: 20 },
    { lat: 5, lng: 20 },
    { lat: 5, lng: 15 },
    { lat: 0, lng: 15 }
  ]]
}
