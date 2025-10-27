import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Home component displaying welcome page with navigation links.
 * Provides access to Student Survey form and List All Surveys.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Student Survey Application';
  subtitle = 'George Mason University Campus Visit Feedback';
}
