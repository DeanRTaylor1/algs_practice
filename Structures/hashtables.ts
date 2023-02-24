#!/usr/bin/env node

class HashTable {
  keyMap: any[];
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }
  private hash(key: string) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  public set addVal(val: [key: string, val: string]) {
    let index = this.hash(val[0]);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [val];
    } else {
      !this.keyMap[index].push(val);
    }
  }
  public get getKeyMap() {
    return this.keyMap;
  }
  public getVal(key: string) {
    let index = this.hash(key);
    let values = this.keyMap[index];
    if (values) {
      for (let item of values) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }
  public get keys() {
    let keys = [];
    for (let item of this.keyMap) {
      if (item) {
        for (let value of item) {
          keys.push(value[0]);
        }
      }
    }
    return keys.length ? keys : undefined;
  }
  public get vals() {
    let keys = [];
    for (let item of this.keyMap) {
      if (item) {
        for (let value of item) {
          keys.push(value[1]);
        }
      }
    }
    return keys.length ? keys : undefined;
  }
}

let hashTable = new HashTable();

console.log(hashTable.keyMap);
hashTable.addVal = ["slate50", "#f8fafc"];
hashTable.addVal = ["slate100", "#f1f5f9"];
hashTable.addVal = ["slate200", "#e2e8f0"];
hashTable.addVal = ["slate300", "#cbd5e1"];
hashTable.addVal = ["red300", "#fecaca"];
hashTable.addVal = ["red400", "#f87171"];
hashTable.addVal = ["red700", "#b91c1c"];
hashTable.addVal = ["cyan200", "#a5f3fc"];
hashTable.addVal = ["sky300", "#7dd3fc"];
hashTable.addVal = ["sky500", "#0ea5e9"];
hashTable.addVal = ["indigo500", "#6366f1"];
hashTable.addVal = ["indigo700", "#4338ca"];
hashTable.addVal = ["fuschia500", "#d946ef"];
hashTable.addVal = ["pink500", "#ec4899"];
hashTable.addVal = ["pink600", "#db2777"];
hashTable.addVal = ["fuschia700", "#a21caf"];
hashTable.addVal = ["rose500", "#f43f5e"];
hashTable.addVal = ["rose700", "#db2777"];
hashTable.addVal = ["rose800", "#db2777"];

console.log(hashTable.keyMap);
console.log(hashTable.getVal("cyan"));
console.log(hashTable.keyMap);
console.log(hashTable.getVal("pink500"));
console.log(hashTable.getVal("sky300"));
console.log(hashTable.getVal("rose500"));
console.log(hashTable.keys);
console.log(hashTable.vals);
