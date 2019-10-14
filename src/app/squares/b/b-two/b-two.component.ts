import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b-two',
  templateUrl: './b-two.component.html',
  styleUrls: ['./b-two.component.css']
})
export class BTwoComponent implements OnInit {
  @Output() squareClicked = new EventEmitter<object>();

  @Input() isClickable;
  @Input() clickCount;
  @Input() playerTurn;
  @Input() pieceInPlay;
  @Input() square;


  constructor() { }

  ngOnInit() {
  }

  
  passClickInfo() {
    if (this.square.clickable === true) {
      this.squareClicked.emit(this.square);
    }
  }


}
