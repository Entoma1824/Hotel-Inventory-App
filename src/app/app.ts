import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  // template:`<h1>Hello world from inline Template!</h1>
  // <p>Angular is awesome</p>
  // `,

  styleUrl: './app.scss'
})
export class App {
  protected title = 'hotelinventoryapp_alt';
}
