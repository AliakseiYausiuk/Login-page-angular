import { Component } from '@angular/core';
import {BtnComponent} from "../../component-ui/components/btn/btn.component";
import {AuthFormComponent} from "../../auth/auth-form/auth-form.component";

@Component({
  selector: 'L-layout-auth',
  standalone: true,
  imports: [
    BtnComponent,
    AuthFormComponent
  ],
  templateUrl: './layout-auth.component.html',
  styleUrl: './layout-auth.component.scss'
})
export class LayoutAuthComponent {

}
