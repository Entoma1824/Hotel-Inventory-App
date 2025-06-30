import { Component } from '@angular/core';
import {Room, RoomList} from './rooms.interface';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    NgStyle
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
    },
    {
      roomNumber: 2,
      roomType: 'deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:'https://jp.pinterest.com/pin/728386939755379848/',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos:'https://jp.pinterest.com/pin/728386939755379848/',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
