import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  isCantor: boolean;
  constructor() {
    this.isCantor = sessionStorage.getItem('cantor') === 'true';
  }

  setCantorRole(isCantor: boolean) {
    this.isCantor = isCantor;
    sessionStorage.setItem('cantor', 'true');
  }
}
