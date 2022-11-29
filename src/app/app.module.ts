import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
