import { Component, inject } from '@angular/core';
import { UsersService } from '../../core/services/users/users.service';

@Component({
  selector: 'app-upload-photo',
  standalone: true,
  imports: [],
  templateUrl: './upload-photo.component.html',
  styleUrl: './upload-photo.component.scss'
})
export class UploadPhotoComponent {

  saveFile!: File

  private readonly _UsersService = inject(UsersService)
  changeImage(e: Event): void {
    const input = e.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.saveFile = input.files[0]
    }
  }
  UpdatePhoto(): void {
    // create formData  بستخدمها لما يكون عندى form  بداخلها files
    const formData = new FormData();
    formData.append('photo', this.saveFile)

    this._UsersService.uploadProfilePhoto(formData).subscribe({
      next: (res) => {
        console.log('Update Photo Done!');
        this.getUserdata()
      }
    })
  }

  getUserdata() {
    this._UsersService.GetLoggedUserData().subscribe({
      next: (res) => {
        this._UsersService.profilePhoto.set(res.user.photo)
      }
    })
  }
}
