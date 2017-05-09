import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { GeoDataService } from '../geo-data.service';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import * as Immutable from 'immutable';

@Component({
  selector: 'my-map-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements OnInit, OnChanges {

  geoArrayOfArrays: Array<any> = [];
  geoCodes: Array<any>;
  geoSum: number = 0;
  @Input() geoObject: Array<LatLngLiteral> = [];

  errorMessage: any;

  @Input() lat: number = 48.143889;
  @Input() lng: number = 17.109722;
  @Input() zoom: number = 4;

  // paths2: Array<LatLngLiteral> = [
  //   { lat: 0,  lng: 10 },
  //   { lat: 0,  lng: 20 },
  //   { lat: 10, lng: 20 },
  //   { lat: 10, lng: 10 },
  //   { lat: 0,  lng: 10 }
  // ]
  // Nesting paths will create a hole where they overlap;
  // nestedPaths: Array<Array<LatLngLiteral>> = [[
  //   { lat: 0,  lng: 10 },
  //   { lat: 0,  lng: 20 },
  //   { lat: 10, lng: 20 },
  //   { lat: 10, lng: 10 },
  //   { lat: 0,  lng: 10 }
  // ], [
  //   { lat: 0, lng: 15 },
  //   { lat: 0, lng: 20 },
  //   { lat: 5, lng: 20 },
  //   { lat: 5, lng: 15 },
  //   { lat: 0, lng: 15 }
  // ]]

  constructor(private geoDataService: GeoDataService, private changeDetect: ChangeDetectorRef) { }

  ngOnChanges() {
    console.log("CHANGE IN Map Area Component! - onCHANGES");
    console.log(this.geoObject);
  }

  ngDoCheck() {
    // console.log("CHANGE IN Map Area Component! - DoCHECK");
    // console.log(this.geoObject);
  }

  ngOnInit() {

  }

}
