
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { PostService } from '../../core/services/posts/post.service';
import { IPost } from '../../core/interfaces/ipost';
import { DatePipe } from '@angular/common';
import { CommentsComponent } from '../../Shared/Ui/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { BlankLayoutComponent } from '../../layout/blank-layout/blank-layout.component';
import { UsersService } from '../../core/services/users/users.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [DatePipe, CommentsComponent, FormsModule, BlankLayoutComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  postList !: IPost[]
  saveFile!: File
  content!: string
  isVisible: boolean = false;
  isModalOpen = false;
  private readonly _PostService = inject(PostService)



  // *********************  modal **************************

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Show the button when scrolled down 100px from the top
    if (scrollTop > 150) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  handleBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Check if the click is on the backdrop (outside the modal content)
    if (target.classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }
  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {
    this.GetAllPosts()
   
  }
  GetAllPosts() {
    this._PostService.GetAllPosts().subscribe({
      next: (res) => {
        this.postList = res.posts
      }
    })
  }
  changeImage(e: Event): void {
    const input = e.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.saveFile = input.files[0]
    }

  }
  createPost(): void {

    // create formData  بستخدمها لما يكون عندى form  بداخلها files
    const formData = new FormData();
    formData.append('body', this.content)
    formData.append('image', this.saveFile)

    this._PostService.CreatePost(formData).subscribe({
      next: (res) => {
        this.closeModal()
        this.GetAllPosts()

      }
    })
  }

}
