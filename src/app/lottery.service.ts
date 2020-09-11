import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LotteryGame } from './models/lottery.model';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  readonly COLLECTION = 'lottery';

  constructor(private firestore: AngularFirestore) { }

  createLotteryGame(lottery: LotteryGame): void {
    this.firestore.collection(this.COLLECTION).doc(lottery.id).set(lottery);
  }

  getLotteryGameList() {
    return this.firestore.collection(this.COLLECTION).valueChanges();
  }

  updateCurrentCard(lotteryId: string, currentCard: string) {
    this.firestore.collection(this.COLLECTION).doc(lotteryId).update({currentCard});
  }

  getLotteryGameUpdates(lotteryId: string) {
    return this.firestore.collection(this.COLLECTION).doc(lotteryId).valueChanges();
  }
}
