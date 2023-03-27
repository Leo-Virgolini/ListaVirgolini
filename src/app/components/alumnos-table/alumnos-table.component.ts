import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.css']
})
export class AlumnosTableComponent implements OnInit {

  public alumnos: Alumno[];
  public cargando: boolean;

  constructor() {
    this.cargando = true;
    
    this.alumnos = [
      new Alumno(1, 'Juan', 'Perez', new Date('1991/07/22')),
      new Alumno(2, 'Tomás', 'Roncero', new Date('1985/08/11')),
      new Alumno(3, 'Carlos', 'Jimenez', new Date('1984/09/24')),
      new Alumno(4, 'Mateo', 'Juarez', new Date('1990/10/10')),
      new Alumno(5, 'Micaela', 'Ramirez', new Date('1991/11/05')),
      new Alumno(6, 'Camila', 'Herrera', new Date('1992/12/07')),
      new Alumno(7, 'Sofía', 'Narvaez', new Date('1986/01/19')),
      new Alumno(8, 'Fernando', 'Iglesias', new Date('1987/05/08')),
      new Alumno(9, 'Romina', 'Sanchez', new Date('1984/04/17')),
      new Alumno(10, 'Pedro', 'Gonzalez', new Date('1988/01/25'))
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 1500);
  }

  calcularPromedios(): void {
    this.alumnos.forEach(alumno => alumno.calcularPromedio());
  }

  quitarAlumno(alumnoId: number): void {
    const index = this.alumnos.findIndex(alumno => alumno.id === alumnoId);
    if (index != -1)
      this.alumnos.splice(index, 1);
  }

}
