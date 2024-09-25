import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData: any = null

  profilePhoto: WritableSignal<string> = signal("")
  
  private _Router = inject(Router)
  constructor(private _HttpClient: HttpClient) { }

  signup(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.basUrl}users/signup`, data)
  }
  signin(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.basUrl}users/signin`, data)
  }
  changePassword(data: object): Observable<any> {
    return this._HttpClient.patch(`${environment.basUrl}users/change-password`, data)
  }
  uploadProfilePhoto(data: object): Observable<any> {
    return this._HttpClient.put(`${environment.basUrl}users/upload-photo`, data)
  }
  GetLoggedUserData(): Observable<any> {
    return this._HttpClient.get(`${environment.basUrl}users/profile-data`)
  }
  saveUserData(): void {
    if (localStorage.getItem('socialToken') !== null) {
      this.userData = jwtDecode(JSON.stringify(localStorage.getItem('socialToken')))
    }
  }

  logOut(): void {
    localStorage.removeItem('socialToken');
    this.userData = null;
    this._Router.navigate(['/signin'])
  }
}
