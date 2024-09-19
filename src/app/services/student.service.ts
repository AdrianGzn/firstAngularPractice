import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private students:Student[] = [];

  constructor() { }

  public addStudent(newStudent:Student):boolean {
    let flag = true;
    let size = this.students.length;
    this.students.push(newStudent);

    if (size == this.students.length){
      flag = false;
    }

    return flag;
  }

  public searchStudent(name:string): Student | undefined {
    return this.students.find(students => students.name === name)
  }

  public deleteStudent(name:string):number {
    let index = this.students.findIndex(student => student.name === name);
    let deleteds = 0;

    if (index !== -1)
      deleteds = this.students.splice(index,1).length;

    return deleteds;
  }

  public updateStudent():boolean {
    return true;
  }

  public getStudents():Student[] {
    return this.students;
  }
}

export interface Student{
  name:string,
  lastName:string,
  age:number
}