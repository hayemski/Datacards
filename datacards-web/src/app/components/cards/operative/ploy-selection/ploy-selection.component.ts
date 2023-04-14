import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../../card/card';

@Component({
  selector: 'app-ploy-selection',
  templateUrl: './ploy-selection.component.html',
  styleUrls: ['./ploy-selection.component.scss']
})
export class PloySelectionComponent implements OnInit {
  @Input() card!: Card;
  @Input() ploys!:any;

  constructor() { }

  ngOnInit() {
  }

  weaponForm = new FormGroup({
    wPloy: new FormControl()
  });

}
