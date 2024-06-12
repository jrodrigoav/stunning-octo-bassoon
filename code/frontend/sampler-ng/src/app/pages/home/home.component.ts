import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { format } from 'date-fns';
import { WorkExperience } from '../../classes/work-experience';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dateMin = "1970-01";
  dateMax = format(new Date(), 'yyyy-MM');
  workExperiences: WorkExperience[] = [];

  newWorkExperience: WorkExperience = new WorkExperience();

  addWorkExperience() {
    this.workExperiences.push({ ...this.newWorkExperience });
    this.newWorkExperience = new WorkExperience();
  }
}
