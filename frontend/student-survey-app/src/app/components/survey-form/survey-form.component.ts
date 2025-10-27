import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';

/**
 * Survey Form component for creating and updating student surveys.
 * Contains all required fields with validation and submission handling.
 */
@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  surveyForm!: FormGroup;
  submitted = false;
  isEditMode = false;
  surveyId?: number;
  showSuccessMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Initialize form with validators
    this.surveyForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfSurvey: ['', Validators.required],
      likedStudents: [false],
      likedLocation: [false],
      likedCampus: [false],
      likedAtmosphere: [false],
      likedDormRooms: [false],
      likedSports: [false],
      interestSource: ['', Validators.required],
      recommendationLikelihood: ['', Validators.required],
      additionalComments: ['']
    });

    // Check if we're in edit mode
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.surveyId = +params['id'];
        this.loadSurvey(this.surveyId);
      }
    });
  }

  /**
   * Load survey data for editing
   */
  loadSurvey(id: number): void {
    this.surveyService.getSurveyById(id).subscribe({
      next: (survey) => {
        this.surveyForm.patchValue(survey);
      },
      error: (error) => {
        console.error('Error loading survey:', error);
        alert('Failed to load survey data');
      }
    });
  }

  /**
   * Getter for easy access to form fields
   */
  get f() {
    return this.surveyForm.controls;
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    this.submitted = true;

    // Stop if form is invalid
    if (this.surveyForm.invalid) {
      return;
    }

    const surveyData: Survey = this.surveyForm.value;

    if (this.isEditMode && this.surveyId) {
      // Update existing survey
      this.surveyService.updateSurvey(this.surveyId, surveyData).subscribe({
        next: () => {
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.router.navigate(['/surveys']);
          }, 2000);
        },
        error: (error) => {
          console.error('Error updating survey:', error);
          alert('Failed to update survey');
        }
      });
    } else {
      // Create new survey
      this.surveyService.createSurvey(surveyData).subscribe({
        next: () => {
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.onReset();
            this.showSuccessMessage = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error creating survey:', error);
          alert('Failed to submit survey');
        }
      });
    }
  }

  /**
   * Reset form to initial state
   */
  onReset(): void {
    this.submitted = false;
    this.surveyForm.reset({
      likedStudents: false,
      likedLocation: false,
      likedCampus: false,
      likedAtmosphere: false,
      likedDormRooms: false,
      likedSports: false
    });
  }

  /**
   * Cancel and navigate back
   */
  onCancel(): void {
    this.router.navigate(['/']);
  }
}
