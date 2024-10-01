import {Component, EventEmitter, input, Output} from '@angular/core';

@Component({
  selector: 'L-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  closeErrorMessage() {}
}
