#!/usr/bin/env node

class User {
  constructor(username) {
    this.username = username;
    this.rank = -8;
    this.progress = 0;
  }
  getDiff(a, b) {
    return Math.abs(a - b);
  }
  incProgress(num) {
    if (num < -8 || num > 8 || num === 0) {
      throw new Error("Invalid rank");
    }
    if (this.rank === 8) {
      return;
    }
    let diff = this.getDiff(num, this.rank);
    if ((this.rank < 0 && num > 0) || (this.rank > 0 && num < 0)) {
      diff--;
    }

    if (num < this.rank) {
      if (diff > 1) {
        return;
      }
      this.progress += 1;
    }

    if (num >= this.rank) {
      if (diff === 0) {
        this.progress += 3;
      } else if (this.rank === -1 && num === 1) {
        this.progress += 10;
      } else {
        this.progress += 10 * diff * diff;
      }
    }
    this.checkLevel();
  }

  checkLevel() {
    let ranks;

    if (this.progress < 100) {
      return;
    }
    if (this.progress === 100) {
      this.progress = 0;
      ranks = 1;
    }
    if (this.progress > 100) {
      ranks = Math.floor(this.progress / 100);
      this.progress = this.progress - 100 * ranks;
    }
    for (let i = 0; i < ranks; i++) {
      this.increaseRank();
      console.log(this.rank);
    }
  }
  increaseRank() {
    if (this.rank === -1) {
      return (this.rank = 1);
    }
    if (this.rank === 7) {
      this.rank += 1;
      this.progress = 0;
      return;
    }

    this.rank += 1;
  }
}

let user1 = new User();

console.log(user1.rank);
console.log(user1.progress);
// console.log(user1.incProgress(-8));
// console.log(user1.progress);
// console.log(user1.rank);
// console.log(user1.incProgress(-8));
// console.log(user1.progress);
// console.log(user1.rank);
// console.log(user1.incProgress(-7));
// console.log(user1.progress);
// console.log(user1.rank);
// console.log(user1.incProgress(-8));
// console.log(user1.progress);
// console.log(user1.rank);
console.log(user1.incProgress(2));
console.log(user1.progress);
console.log(user1.rank);
