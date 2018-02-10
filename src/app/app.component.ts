import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Form App';
  languages: string[] = ['English', 'Spanish', 'French'];
  model: Employee = new Employee('Frank', 'Reashore', true, "W2", "English");
}
