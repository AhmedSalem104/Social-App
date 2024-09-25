import { UsersService } from './../../core/services/users/users.service';
import { AfterViewInit, Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Datepicker } from 'flowbite';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,NgIf,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements AfterViewInit {

  private readonly _UsersService = inject(UsersService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)
  isLoading: boolean = false;


  ngAfterViewInit(): void {
    // Other initialization code if needed
  }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  RegisterForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ )]],
    rePassword: [null, Validators.required],
    dateOfBirth: [this.getTodayDate(), [Validators.required, Validators.pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)]],
    gender: [null, [Validators.required]],
  }, { validators: [this.checkRepasswordMatch] })
/* 
  ngAfterViewInit(): void {
    const datepickerElement = document.querySelector('#dateOfBirth') as HTMLElement;
    if (datepickerElement) {
      const datepicker = new Datepicker(datepickerElement);

      // Update the form control when date changes
      datepickerElement.addEventListener('change', (event: Event) => {
        const inputElement = event.target as HTMLInputElement;
        console.log(inputElement.value);
        
        this.RegisterForm.get('dateOfBirth')?.setValue(inputElement.value, { emitEvent: false });
        this.RegisterForm.get('dateOfBirth')?.markAsTouched();
      });

      console.log('Datepicker initialized', datepicker);
    } else {
      console.log('Datepicker element not found');
    }
  } */

  checkRepasswordMatch(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  submitRegisterForm() {
    console.log(this.RegisterForm);
    console.log(this.RegisterForm.valid);
    if (this.RegisterForm.valid) {
      this.isLoading = true;
      this.fetchApi();
    } else {
      this.RegisterForm.markAllAsTouched();
    }
  }

  fetchApi() {
    this._UsersService.signup(this.RegisterForm.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this._Router.navigate(['/signin']);
        }
        console.log(res);
        this.isLoading = false;
      },
    });
  }
}



