import {Component} from '@angular/core';
import {BtnComponent} from "../../component-ui/components/btn/btn.component";
import {AuthFormComponent} from "../../auth/auth-form/auth-form.component";
import {ErrorMessageComponent} from "../../component-ui/components/error-message/error-message.component";

@Component({
  selector: 'L-layout-auth',
  standalone: true,
  imports: [
    BtnComponent,
    AuthFormComponent,
    ErrorMessageComponent
  ],
  templateUrl: './layout-auth.component.html',
  styleUrl: './layout-auth.component.scss'
})
export class LayoutAuthComponent {

  isError: boolean = false;

  onError(value: boolean) {
    this.isError = value;
  }
}
