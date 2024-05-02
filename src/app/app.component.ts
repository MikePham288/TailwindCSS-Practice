import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalExerciseComponent } from './modal-exercise/modal-exercise.component';
import { SpacingDividingExerciseComponent } from './spacing-dividing-exercise/spacing-dividing-exercise.component';
import { StylingFormExerciseComponent } from './styling-form-exercise/styling-form-exercise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalExerciseComponent, SpacingDividingExerciseComponent, StylingFormExerciseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwindcss-practice';
}
