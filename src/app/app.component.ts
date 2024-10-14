import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Where in the world?';
  mode = 'Dark Mode';
  switch:boolean = false;
  toggleStyle(event:any) {
    event.preventDefault();
    this.switch = !this.switch

    if(this.switch) {
      this.mode = "Light Mode";
    } else {
      this.mode = "Dark Mode";
    }
    document.body.classList.toggle("dark-body");
  }


}
