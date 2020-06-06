import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  flashcardData: any[] = [
    {
      "subject": "JavaScript",
      "question": "What is JavaScript?",
      "answer": "JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language"
    },
    {
      "subject": "JavaScript",
      "question": "Enumerate the differences between Java and JavaScript?",
      "answer": "Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language."
    },
    {
      "subject": "JavaScript",
      "question": "What are JavaScript Data Types?",
      "answer": "Following are the JavaScript Data types:Number, String, Boolean, Object, Undefined"
    },
    {
      "subject": "JavaScript",
      "question": "What is the use of isNaN function?",
      "answer": "isNan function returns true if the argument is not a number otherwise it is false."
    },
    {
      "subject": "JavaScript",
      "question" : "push()",
      "answer" : "arr.push(element1[, ...[, elementN]])"
    },
    {
      "subject": "JavaScript",
      "question" : "getElementById",
      "answer" : "var element = document.getElementById(id);"
    },
    {
      "subject": "JavaScript",
      "question" : "querySelector()",
      "answer" : "element = document.querySelector(selectors);"
    }
  ]
  question: any;
  answer: any;
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  displayItem() {
    this.answer.classList.add("hide");
    this.question.innerHTML = this.flashcardData[this.counter].question;
    this.answer.innerHTML = this.flashcardData[this.counter].answer;
  }

  displayPrev() {
    if (this.counter > 0) {
      this.counter -= 1;
      this.displayItem();
    }
  }
  displayNext() {
    if (this.counter < this.flashcardData.length -1) {
      this.counter += 1;
      this.displayItem();
   }
  }

  displayAnswer() {
    this.answer.classList.remove("hide");
  }
}
