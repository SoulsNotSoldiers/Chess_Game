import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-f-two',
  templateUrl: './f-two.component.html',
  styleUrls: ['./f-two.component.css']
})
export class FTwoComponent implements OnInit {
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
    if(this.square.clickable === true) {
      this.squareClicked.emit(this.square);
    }
  }

}
