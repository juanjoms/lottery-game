import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: string;
  @Output() select: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

}
