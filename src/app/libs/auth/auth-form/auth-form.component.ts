import {Component, OnInit} from '@angular/core';
import {BtnComponent} from "../../component-ui/components/btn/btn.component";
import {InputComponent} from "../../component-ui/components/input/input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'L-auth-form',
  standalone: true,
  imports: [
    BtnComponent,
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<number | null>(null, [Validators.required, Validators.minLength(6)]),
  })

  ngOnInit(): void {
    this.form.markAllAsTouched()
  }
}
