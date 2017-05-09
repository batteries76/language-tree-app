import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LanguageTreeComponent } from './language-tree/language-tree.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';

import { LanguageService } from './language.service';
import { GeoDataService } from './geo-data.service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2MapModule} from 'ng2-map';
import { Ng2UIModule }    from 'ng2-ui';

@NgModule({
  declarations: [
    AppComponent,
    LanguageTreeComponent,
    MapAreaComponent,
    MapPolygonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2UIModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAbTUHVl2LPFJq3dsrTcZ7fdgUck8Ecp8k'
    // })
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAbTUHVl2LPFJq3dsrTcZ7fdgUck8Ecp8k'})
  ],
  providers: [
    LanguageService,
    GeoDataService
  ],
  bootstrap: [AppComponent],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
