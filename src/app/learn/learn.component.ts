import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  showAnswer = false;
  flashcardData: any;
  question: any;
  answer: any;
  counter: number = 0;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData()
      .subscribe(data => {
        this.flashcardData = data;
      })  
  }

  displayItem() {
    this.question = this.flashcardData[this.counter].question;
    this.answer = this.flashcardData[this.counter].answer;
  }

  displayPrev() {
    this.showAnswer = false;
    if (this.counter > 0) {
      this.counter -= 1;
      this.displayItem();
    }
  }
  displayNext() {
    this.showAnswer = false;
    if (this.counter < this.flashcardData.length -1) {
      this.counter += 1;
      this.displayItem();
   }
  }

  displayAnswer() {
    this.showAnswer = true;
  }
}
