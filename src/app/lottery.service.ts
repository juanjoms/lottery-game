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
    this.firestore.collection(this.COLLECTION).doc(lotteryId).update({currentCard, winner: null, restart: null});
  }

  updateGameWinner(lotteryId: string, winner: string) {
    this.firestore.collection(this.COLLECTION).doc(lotteryId).update({winner})
  }

  endGame(lotteryId: string) {
    this.firestore.collection(this.COLLECTION).doc(lotteryId).update({gameOver: true, winner: null});
  }
  restartGame(lotteryId: string) {
    this.firestore.collection(this.COLLECTION).doc(lotteryId).update({restart: true, currentCard: null, winner: null, gameOver: null});
  }

  getGameUpdates(lotteryId: string) {
    return this.firestore.collection(this.COLLECTION).doc(lotteryId).valueChanges();
  }

  deleteGame(lotteryId: string) {
    this.firestore.collection(this.COLLECTION).doc(lotteryId).delete();
  }

}
