import { Component } from '@angular/core';
import {Room, RoomList} from './rooms.interface';
import {
  CurrencyPipe,
  DatePipe, DecimalPipe,
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  PercentPipe, SlicePipe,
  TitleCasePipe
} from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    NgStyle,
    DatePipe,
    TitleCasePipe,
    CurrencyPipe,
    PercentPipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe
  ],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})


export class Rooms {
  hotelName = 'Hilton hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms : Room = {
    totalRooms: 20,
    availableRooms : 10,
    bookedRooms : 5

  }

  roomList :RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:'https://jp.pinterest.com/pin/728386939755379848/',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:'https://jp.pinterest.com/pin/728386939755379848/',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.456456,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos:'https://jp.pinterest.com/pin/728386939755379848/',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.6,
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
