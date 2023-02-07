import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  isCantor: boolean;
  playerName: string;
  constructor() {
    this.isCantor = sessionStorage.getItem('cantor') === 'true';
    this.playerName = sessionStorage.getItem('name') || 'Anónimo'
  }

  savePlayer(name: string, isCantor: boolean) {
    this.playerName = name || 'Anónimo';
    this.isCantor = isCantor;
    sessionStorage.setItem('name', this.playerName);
    sessionStorage.setItem('cantor', `${isCantor}`);
  }
}
