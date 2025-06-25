import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Rooms} from './rooms/rooms';

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  // template:`<h1>Hello world from inline Template!</h1>
  // <p>Angular is awesome</p>
  // `,

  styleUrl: './app.scss'
  // styles: [`h1 { color: red }`]
})
export class App {
  protected title = 'hotelinventoryapp_alt';
}
