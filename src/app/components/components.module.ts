import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AlumnosTableComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlumnosTableComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
