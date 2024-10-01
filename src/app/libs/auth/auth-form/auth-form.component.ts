import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {BtnComponent} from "../../component-ui/components/btn/btn.component";
import {InputComponent} from "../../component-ui/components/input/input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../data/auth.service";
import {Router} from "@angular/router";

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

  authService = inject(AuthService);
  router = inject(Router);

  @Output() error = new EventEmitter<boolean>();

  form = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)]),
  })


  ngOnInit(): void {
    this.form.markAllAsTouched()
  }

  onSubmit() {
    if (this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value)
      this.router.navigate([''])
    }

    if (this.form.invalid) {
      this.error.emit(true);
    }
  }

}
