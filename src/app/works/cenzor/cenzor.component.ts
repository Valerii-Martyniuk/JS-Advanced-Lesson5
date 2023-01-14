import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss'],
})
export class CenzorComponent {
  badWordsAll = '';
  badWord = '';
  coverText = '';

  addWord() {
    if (this.badWord == '') {
      return alert('write word');
    }
    if (this.badWordsAll === '') {
      this.badWordsAll += this.badWord;
    } else {
      this.badWordsAll += ' ' + this.badWord;
    }
    this.badWord = '';
  }
  reset() {
    this.badWord = '';
    this.badWordsAll = '';
    this.coverText = '';
  }
  cenzorFunction() {
    if (this.coverText == '') {
      return alert('write text');
    }
    let arrWords = this.badWordsAll.split(' ');
    let arrText = this.coverText.split(' ');
    for (let i = 0; i < arrText.length; i++) {
      let a = arrText[i];
      for (let i = 0; i < arrWords.length; i++) {
        if (a == arrWords[i]) {
          let b = arrWords[i].length;
          a = '';
          for (let i = 0; i < b; i++) {
            a += '*';
          }
        }
      }
      arrText[i] = a;
    }
    this.coverText = arrText.join(' ');
  }
}
