import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a-three',
  templateUrl: './a-three.component.html',
  styleUrls: ['./a-three.component.css']
})
export class AThreeComponent implements OnInit {
  @Output() squareClicked = new EventEmitter<object>();

  @Input() isClickable;
  @Input() clickCount;
  @Input() playerTurn;
  @Input() pieceInPlay;
  @Input() appPiece; 
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
