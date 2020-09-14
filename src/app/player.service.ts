import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  isCantor: boolean;
  playerName: string;
  constructor() {
    this.isCantor = sessionStorage.getItem('cantor') === 'true';
    this.playerName = sessionStorage.getItem('name');
  }

  setCantorRole() {
    this.isCantor = true;
    sessionStorage.setItem('cantor', 'true');
  }

  setPlayerName(name: string) {
    this.playerName = name || 'Anónimo';
    sessionStorage.setItem('name', this.playerName);
  }
}
