import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { GeoDataService } from '../geo-data.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Language } from '../language';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-language-tree',
  templateUrl: './language-tree.component.html',
  styleUrls: ['./language-tree.component.css']
})
export class LanguageTreeComponent implements OnInit {

  languageHead: Language;
  languagePath: Language[] = [];
  prevLanguage: Language;

  languageArray: any;

  errorMessage: any;

  constructor(private languageService: LanguageService, private geoDataService: GeoDataService) {
  }

  ngOnInit() {
    this.languageService.getAllLanguages()
                     .subscribe(
                       languages => {
                         this.languageHead = languages[0];
                         console.log("In onInit");
                         console.log("languages");
                         console.log(languages);
                       },
                       error =>  {
                         this.errorMessage = <any>error
                       });
  }

  makeNewHead(child){
    this.prevLanguage = this.languageHead;
    this.languagePath.push(this.languageHead);
    console.log("in makeNewHead");
    this.languageHead = child;
  }

  getMapData(cca2_code_array){
    console.log("in getMapData");
    this.geoDataService.getCountryGeoData(cca2_code_array);
  }

  goBackUp(){
    if (this.languagePath.length != 0) {
      this.languageHead = this.languagePath.pop();
    }
  }
}
