import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LanguageTreeComponent } from './language-tree/language-tree.component';
import { MapAreaComponent } from './map-area/map-area.component';

import { LanguageService } from './language.service';

@NgModule({
  declarations: [
    AppComponent,
    LanguageTreeComponent,
    MapAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
