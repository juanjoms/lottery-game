export class Utils {
  static readonly TOTAL_CARDS = 60;
  static readonly DECK_SIZE = 12; // 4x3

  static generateLotteryId() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16);
  }

  static getRandNonRepeatedCard(currentCards: {[idx: number]: boolean}) {
    let rand: number
    do {
      rand = this.getRand(this.TOTAL_CARDS);
    } while (currentCards[rand]);
    return rand;
  }

  static generateDeck(): number[] {
    const shuffledCards = this.shuffle([...Array(this.TOTAL_CARDS).keys()]);
    const deck = shuffledCards.slice(0, this.DECK_SIZE);
    const missingCards = this.DECK_SIZE - this.TOTAL_CARDS;

    if (missingCards > 0 ) {
      deck.push(...Array(missingCards).fill(0).map(_ => this.getRand(this.TOTAL_CARDS)));
    }
    return deck;
  }

  static shuffle(array: number[]) {
    for(let i = array.length -1; i > 0; i -= 1){
      const j = Math.floor(Math.random() * i);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  static getRand(limit: number) {
    return Math.floor((Math.random() * limit));
  }
}
