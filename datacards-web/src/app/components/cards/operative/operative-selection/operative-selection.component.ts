import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { allData } from 'src/assets/data';
import { Card } from '../../card/card';

@Component({
  selector: 'app-operative-selection',
  templateUrl: './operative-selection.component.html',
  styleUrls: ['./operative-selection.component.scss']
})
export class OperativeSelectionComponent implements OnInit {
  @Input() card!: Card;

  constructor() { }
  data: any = allData;
  imp: any = this.data[2].killteams[7].fireteams[0].operatives;

  ngOnInit(): void {
    console.log(this.imp);
    this.weaponForm.get('wType')?.valueChanges.subscribe(value => {
      console.log(value)
      this.card.APL = value.APL;
      this.card.DF = value.DF;
      this.card.GA = value.GA;
      this.card.movement = value.M.slice(0,1);
      this.card.name = value.opname;
      this.card.save = value.SV;
      this.card.wounds = value.W;
    })

  }

  weaponForm = new FormGroup({
    wType: new FormControl(),
  });



}
