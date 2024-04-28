import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spacing-dividing-exercise',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './spacing-dividing-exercise.component.html',
  styleUrl: './spacing-dividing-exercise.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacingDividingExerciseComponent { }
