import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguageService {

  geoArray: Array<string>;

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllLanguages() {
    console.log("in getAllLanguages");
    return this.http.get('/api/final-language-tree')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCountryGeoData(cca2Array) {
    this.geoArray = [];
    var geoData;
    console.log("in getCountryGeoData");
    console.log("cca2Array is: " + cca2Array);
    if(cca2Array.length>0) {
      cca2Array.forEach(cca2Code => {
        var cca2CodeL = cca2Code.toLowerCase();
        console.log("cca2CodeL is: " + cca2CodeL);
        geoData = this.http.get('/api/country-geo/:cca2CodeL')
          .map(this.extractData)
          .catch(this.handleError);
        this.geoArray.push(geoData);
      });
    }
    return this.geoArray;
  }

  private extractData(res: Response) {
    console.log("in extract data");
    console.log("res");
    console.log(res);
    let body = res.json();
    console.log("res.json");
    console.log(res.json());
    console.log("res.json().data");
    console.log(body.data);
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
