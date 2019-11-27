import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  currentNumber: number;
  @Output() changeImage: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() {
  }

  ngOnInit() {
    this.setImage(1);
  }

  setImage(imageNum: number) {
    this.currentNumber = imageNum;
    this.changeImage.emit(imageNum);
  }

}
