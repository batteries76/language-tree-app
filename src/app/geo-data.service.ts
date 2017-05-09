import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeoDataService {

  geoArraySubject = new Subject<Array<any>>();

  constructor(private http: Http) { }

  getCountryGeoData(cca2Array) {
    var geoData;
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    let geoSearch: URLSearchParams = new URLSearchParams();
    console.log("in getCountryGeoData");
    console.log("cca2Array is: " + cca2Array);

    cca2Array.forEach(cca2Code => {
      var cca2CodeL = cca2Code.toLowerCase();
      console.log("cca2CodeL is: " + cca2CodeL);
      geoSearch.set('cca2', cca2CodeL);
    });
    console.log("geoSearch is " + geoSearch);
    let requestOptions = new RequestOptions();
    requestOptions.search = geoSearch;
    this.http.get('/api/country-geo?', requestOptions)
            .map(this.extractGeoData)
            .catch(this.handleError)
            .subscribe(res => {
              this.geoArraySubject.next(res);
            });
  }

  private extractGeoData(res: Response) {
    console.log("in extract GEO data");
    console.log("res");
    console.log(res);
    let body = res.json();
    console.log("res.json");
    console.log(res.json());
    console.log("res.json().data");
    console.log(body.data);
//    this.geoArraySubject.next(body);
    return body
    // .data || { };
  }

  private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
