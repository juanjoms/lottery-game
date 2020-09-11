import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  cards: number[];
  constructor() { }

  ngOnInit(): void {
  }

}
