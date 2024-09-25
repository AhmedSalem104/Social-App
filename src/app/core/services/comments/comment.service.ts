import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _HttpClient: HttpClient) { }


  CreateComment(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.basUrl}comments`, data)
  }
  GetPostComments(postId: string): Observable<any> {
    return this._HttpClient.get(`${environment.basUrl}posts/${postId}/comments`)
  }
  UpdateComment(commentId: string, data: object): Observable<any> {
    return this._HttpClient.put(`${environment.basUrl}comments/${commentId}`, data)
  }
  DeleteComment(commentId: string): Observable<any> {
    return this._HttpClient.delete(`${environment.basUrl}comments/${commentId}`)
  }
}
