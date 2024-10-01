import {Component, input} from '@angular/core';

@Component({
  selector: 'L-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  classStyle = input<'btn' | 'btn-outline'>('btn')
}
