import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor (private studentService: StudentService) {}

  public students:Student[] = [];

  receiveMessage($event: String){
    alert($event)
  }

  addStudent() {
    console.log("Agregado");
    let student:Student = {
      name: "Adrián",
      lastName: "Guzmán",
      age: 19
    }
    if(this.studentService.addStudent(student)){
      console.log("Agregado")
    }
  }

  getAll() {
    this.students = this.studentService.getStudents();
    console.log(this.students);
    
    console.log("Actualizado");
    
  }
}
