import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppFooterComponent } from '../app-fixed-footer/app-footer.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterLink, AppFooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
