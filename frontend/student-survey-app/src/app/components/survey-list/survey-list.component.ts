import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';

/**
 * Survey List component for displaying all surveys in a table.
 * Provides functionality to view, update, and delete surveys.
 */
@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  loading = true;

  constructor(
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSurveys();
  }

  /**
   * Load all surveys from the backend
   */
  loadSurveys(): void {
    this.loading = true;
    this.surveyService.getAllSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading surveys:', error);
        this.loading = false;
        alert('Failed to load surveys. Please make sure the backend is running.');
      }
    });
  }

  /**
   * Navigate to edit survey form
   */
  editSurvey(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/survey', id]);
    }
  }

  /**
   * Delete a survey with confirmation
   */
  deleteSurvey(id: number | undefined): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe({
        next: () => {
          this.loadSurveys(); // Reload the list
        },
        error: (error) => {
          console.error('Error deleting survey:', error);
          alert('Failed to delete survey');
        }
      });
    }
  }

  /**
   * Get liked items as comma-separated string
   */
  getLikedItems(survey: Survey): string {
    const liked: string[] = [];
    if (survey.likedStudents) liked.push('Students');
    if (survey.likedLocation) liked.push('Location');
    if (survey.likedCampus) liked.push('Campus');
    if (survey.likedAtmosphere) liked.push('Atmosphere');
    if (survey.likedDormRooms) liked.push('Dorm Rooms');
    if (survey.likedSports) liked.push('Sports');
    return liked.length > 0 ? liked.join(', ') : 'None';
  }
}
