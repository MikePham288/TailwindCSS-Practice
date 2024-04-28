import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-exercise',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './modal-exercise.component.html',
  styleUrl: './modal-exercise.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalExerciseComponent { }
