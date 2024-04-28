import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalExerciseComponent } from './modal-exercise/modal-exercise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalExerciseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwindcss-practice';
}
