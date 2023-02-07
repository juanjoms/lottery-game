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
      const link = document.createElement("link");
      link.rel = 'preload';
      link.as = 'image';
      link.href = `/assets/images/${i}.png`;
      document.head.appendChild(link);
    }
  }
}
