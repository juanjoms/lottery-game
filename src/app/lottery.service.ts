import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { LotteryGame } from './models/lottery.model';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  readonly COLLECTION = 'lottery';

  constructor(private firestore: Firestore) { }

  getLotteryGameList() {
    const collectionRef = collection(this.firestore, this.COLLECTION);
    return collectionData(collectionRef);
  }

  createLotteryGame(lottery: LotteryGame): void {
    const newDocumment = doc(this.firestore, `${this.COLLECTION}/${lottery.id}`);
    setDoc(newDocumment, lottery);
  }

  getGameUpdates(lotteryId: string) {
    const document = doc(this.firestore, `${this.COLLECTION}/${lotteryId}`);
    return docData(document);
  }

  updateCurrentCard(lotteryId: string, currentCard: string) {
    const document = doc(this.firestore, `${this.COLLECTION}/${lotteryId}`);
    updateDoc(document, {currentCard, winner: null, restart: null});
  }

  updateGameWinner(lotteryId: string, winner: string) {
    const document = doc(this.firestore, `${this.COLLECTION}/${lotteryId}`);
    updateDoc(document, { winner });
  }

  endGame(lotteryId: string) {
    const document = doc(this.firestore, `${this.COLLECTION}/${lotteryId}`);
    updateDoc(document, { gameOver: true });
  }

  restartGame(lotteryId: string) {
    const document = doc(this.firestore, `${this.COLLECTION}/${lotteryId}`);
    updateDoc(document, {restart: true, currentCard: null, winner: null, gameOver: null});
  }

  deleteGame(lotteryId: string) {
    const document = doc(this.firestore, `${this.COLLECTION}/${lotteryId}`);
    deleteDoc(document);
  }

}
