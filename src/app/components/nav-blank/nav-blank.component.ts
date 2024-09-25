import { NgClass, NgIf } from '@angular/common';
import { AfterViewInit, Component, computed, ElementRef, HostListener, inject, OnInit, Signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';
import { UsersService } from '../../core/services/users/users.service';


@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, TimelineComponent, RouterOutlet],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {


  isDropdownOpen = false;
  CurrentCount: number | string = ""
  isMenuHidden = true;
  userdata!: any
  profilePhoto:Signal<string> = computed(()=> this._UsersService.profilePhoto())

  public readonly _UsersService = inject(UsersService)

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    const dropdownMenu = document.getElementById('dropdownAvatar');
    if (this.isDropdownOpen) {
      dropdownMenu?.classList.remove('hidden');
    } else {
      dropdownMenu?.classList.add('hidden');
    }
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const dropdownButton = document.getElementById('dropdownUserAvatarButton');
    const dropdownMenu = document.getElementById('dropdownAvatar');

    if (dropdownButton && dropdownMenu && !dropdownButton.contains(event.target as Node) && !dropdownMenu.contains(event.target as Node)) {
      dropdownMenu.classList.add('hidden');
      this.isDropdownOpen = false;
    }
  }


  ngOnInit(): void {
    this.getUserdata();
    this.checkScroll();
    this.setupScrollToTopButton();
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;

    if (window.pageYOffset > navbarHeight) {
      scrollTopBtn?.classList.remove('hidden');
    } else {
      scrollTopBtn?.classList.add('hidden');
    }
  }

  setupScrollToTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    scrollTopBtn?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // يتيح التمرير السلس
      });
    });
  }


  getUserdata() {
    this._UsersService.GetLoggedUserData().subscribe({
      next: (res) => {
        this._UsersService.profilePhoto.set(res.user.photo)
        this.userdata = res.user
      }
    })
  }
}
