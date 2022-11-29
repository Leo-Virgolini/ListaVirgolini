import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.css']
})
export class AlumnosTableComponent implements OnInit {

  alumnos: Alumno[];

  constructor() {
    this.alumnos = [new Alumno(1, 'Juan', 'Perez', new Date('1991/07/22'), 7.7),
    new Alumno(2, 'Tomás', 'Roncero', new Date('1985/08/11'), 6.5),
    new Alumno(3, 'Carlos', 'Jimenez', new Date('1984/09/24'), 3),
    new Alumno(4, 'Mateo', 'Juarez', new Date('1990/10/10'), 8.4),
    new Alumno(5, 'Micaela', 'Ramirez', new Date('1991/11/05'), 8),
    new Alumno(6, 'Camila', 'Herrera', new Date('1992/12/07'), 9),
    new Alumno(7, 'Sofía', 'Narvaez', new Date('1986/01/19'), 4)];
  }

  ngOnInit(): void {
  }

}
