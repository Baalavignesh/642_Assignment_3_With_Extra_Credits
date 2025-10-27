import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

/**
 * Root component of the Student Survey Application.
 * Provides the main layout with navigation and router outlet.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  title = 'Student Survey App';
}
