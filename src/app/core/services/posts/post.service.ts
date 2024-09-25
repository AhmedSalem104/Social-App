import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _HttpClient: HttpClient) { }

  CreatePost(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.basUrl}posts`, data)
  }
  GetAllPosts(): Observable<any> {
    return this._HttpClient.get(`${environment.basUrl}posts`)
  }
  GetUserPosts(): Observable<any> {
    return this._HttpClient.get(`${environment.basUrl}users/664bcf3e33da217c4af21f00/posts`)
  }
  GetSinglePost(postId: string): Observable<any> {
    return this._HttpClient.get(`${environment.basUrl}posts/${postId}`)
  }
  updatePost(postId: string, data: object): Observable<any> {
    return this._HttpClient.put(`${environment.basUrl}posts/${postId}`, data)
  }
  deletePost(postId: string): Observable<any> {
    return this._HttpClient.delete(`${environment.basUrl}posts/${postId}`)
  }
}
