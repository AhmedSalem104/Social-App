import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from '../../components/nav-blank/nav-blank.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';


@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavBlankComponent,RouterOutlet,TimelineComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
