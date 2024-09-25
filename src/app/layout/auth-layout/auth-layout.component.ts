import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavAuthComponent } from '../../components/nav-auth/nav-auth.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [NavAuthComponent,RouterOutlet,TimelineComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
