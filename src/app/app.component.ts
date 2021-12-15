import { Component } from '@angular/core';
import { Utils } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.preloadImages();
  }

  public preloadImages() {
    for (let i = 0; i < Utils.TOTAL_CARDS; i += 1) {
      const img = new Image();
      img.src = `/assets/images/${i}.png`;
    }
  }
}
