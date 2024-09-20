import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { StudentService, Student } from '../../services/student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public students:Student[] = [];
  myForm: FormGroup;

  constructor (private studentService: StudentService, private formB: FormBuilder) {
    this.myForm = this.formB.group({
      name: ['', [Validators.minLength(1), Validators.maxLength(40)]],
      lastName: ['', [Validators.minLength(1), Validators.maxLength(40)]],
      age: [null]
    })
  }

  receiveMessage($event: String){
    alert($event)
  }

  addStudent() {
    const stundet = this.myForm.value;
    if(this.studentService.addStudent(stundet)){
      console.log("Agregado")
    }
  }

  getAll() {
    this.students = this.studentService.getStudents();
    console.log(this.students);
    
    console.log("Actualizado");
  }
}
