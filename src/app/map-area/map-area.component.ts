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
  @Input() geoObject: Array<LatLngLiteral> = Immutable.fromJS({});

  errorMessage: any;

  @Input() lat: number;
  @Input() lng: number;
  @Input() centre: LatLngLiteral;
  @Input() zoom: number = 5;

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
