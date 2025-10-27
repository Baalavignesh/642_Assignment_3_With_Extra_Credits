import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';

/**
 * Application routes configuration.
 * Defines the navigation paths for the application.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'survey/:id', component: SurveyFormComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: '**', redirectTo: '' }
];
