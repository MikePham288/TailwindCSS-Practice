import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-styling-form-exercise',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './styling-form-exercise.component.html',
  styleUrl: './styling-form-exercise.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingFormExerciseComponent { }
