import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../core/services/users/users.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgClass],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  step: number = 1
  isLoading: boolean = false
  Email:string=''

  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _UsersService = inject(UsersService)
  private readonly _Router = inject(Router)


  // Create Form FormBuilder  changePassword
  changePasswordForm: FormGroup = this._FormBuilder.group({
    password: [null, [Validators.required]],
    newPassword: [null, [Validators.required]]
  })


  changePassword(): void {
    this.isLoading = true
    this._UsersService.changePassword(this.changePasswordForm.value).subscribe({
      next: (res) => {
        this.isLoading = false
        localStorage.setItem('socialToken', res.token)
        this._UsersService.saveUserData()
        this._Router.navigate(['/timeline'])
      },
      error: (err) => {
        this.isLoading = false
      }
    })
  }

 
}
