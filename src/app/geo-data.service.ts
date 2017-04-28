import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GeoDataService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getGeoData(cca3) {
    console.log("in getGeoData");
    return this.http.get('/api/final-language-tree')
      .map(this.extractData)
      .catch(this.handleError);
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
