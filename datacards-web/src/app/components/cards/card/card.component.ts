import { Component, OnInit } from '@angular/core';
import { Card } from './card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: Card = {
    name: '',
    movement: 0,
    APL: 0,
    GA: 0,
    DF: 0,
    save: 0,
    wounds: 0,
    weapons: undefined,
    abilities : undefined,
    uniqueActions: undefined
  };
  constructor() {
  }

  ngOnInit() {
  }

}
