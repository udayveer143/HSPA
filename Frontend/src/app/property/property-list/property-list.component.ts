import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:Array<any>=[
  {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":2,
    "Name":"Eros Villa",
    "Type":"Villa",
    "Price":11800
  },
  {
    "Id":3,
    "Name":"Jyoti Homes",
    "Type":"Home",
    "Price":18000
  },
  {
    "Id":4,
    "Name":"Pooja Associates",
    "Type":"Associate",
    "Price":14000
  },
  {
    "Id":5,
    "Name":"Parihar Apartments",
    "Type":"Apartment",
    "Price":16000
  },
  {
    "Id":5,
    "Name":"Aditya Homes",
    "Type":"Home",
    "Price":10000
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
