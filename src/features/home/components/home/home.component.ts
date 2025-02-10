import { Component } from '@angular/core';
import { HomeNewsComponent } from "./home-news/home-news.component";

@Component({
  selector: 'app-home',
  imports: [HomeNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
