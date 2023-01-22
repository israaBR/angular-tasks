import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  studentsList: { name: string; age: string }[] = [];

  name_value: string = '';
  age_value: string = '';
  isNameValid: boolean = true;
  isAgeValid: boolean = true;

  constructor() {}

  validateNameValue(event: any) {
    if (String(event.target.value).length >= 3) this.isNameValid = true;
    else this.isNameValid = false;
  }
  validateAgeValue(event: any) {
    if (Number(event.target.value) >= 18) this.isAgeValid = true;
    else this.isAgeValid = false;
  }
  add_student() {
    if (this.isNameValid && this.isAgeValid) {
      this.studentsList.push({
        name: this.name_value,
        age: this.age_value,
      });
    }
  }
}
