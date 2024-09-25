import { UsersService } from './../../core/services/users/users.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _AuthService = inject(UsersService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)
 /*  private readonly _ToastrService = inject(ToastrService) */
  
  isLoading: boolean = false

  // Create Form FormBuilder

  LoginForm: FormGroup = this._FormBuilder.group({

    //  name:this._FormBuilder.control(null)
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ )]]
  })
  submitLoginForm() {
    if (this.LoginForm.valid) {
      this.isLoading = true
      this.fetchApi()
    }
    else {
      this.LoginForm.markAllAsTouched()
      this.isLoading = false
    }
  }
  fetchApi() {
    this._AuthService.signin(this.LoginForm.value).subscribe({
      next: (res) => {
        if (res.message == 'success') {
          setTimeout(() => {
            localStorage.setItem('socialToken',res.token)
            this._AuthService.saveUserData()
            this._Router.navigate(['/timeline'])
          }, 1000);
        }
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false
      }
    })
  }
 /*  showSuccess() {
    this._ToastrService.success('', 'Success Welcome ☺..!', {
      timeOut: 1500,
      positionClass: 'toast-top-center',
    });
  } */
  
}
