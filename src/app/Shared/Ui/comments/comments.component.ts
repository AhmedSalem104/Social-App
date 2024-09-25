import { Component, inject, Input, input, OnInit } from '@angular/core';
import { CommentService } from '../../../core/services/comments/comment.service';
import { IComment } from '../../../core/interfaces/IComment';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  CommentList!: IComment[]
  commentForm!: FormGroup
  private readonly _CommentService = inject(CommentService)
  @Input({ required: true }) postId!: string


  ngOnInit(): void {


    this.commentForm = new FormGroup({
      content: new FormControl(null),
      post: new FormControl(this.postId)
    })

    this._CommentService.GetPostComments(this.postId).subscribe({
      next: (res) => {
        this.CommentList = res.comments.reverse()
      }
    })
  }


  sendComment() {
    this._CommentService.CreateComment(this.commentForm.value).subscribe({ 
      next: (res) => {
        this.CommentList = res.comments.reverse()
        this.commentForm.get('content')?.reset()
      }
    })
  }


}
