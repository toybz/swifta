import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  bgColor: string;
  currentImage: string;
  imagesAndColor = {
    1: {
      image_path: 'assets/images/image1.jpg',
      background_color: '#011e32'
    },
    2: {
      image_path: 'assets/images/image2.jpg',
      background_color: '#543000'
    },
    3: {
      image_path: 'assets/images/image3.jpg',
      background_color: '#420422'
    }
    ,
    4: {
      image_path: 'assets/images/image4.jpg',
      background_color: '#1b0818'
    }
  };

  ngOnInit() {

  }

  updateImageAndBackground(event: number) {

    this.currentImage = this.imagesAndColor[event].image_path;
    this.bgColor = this.imagesAndColor[event].background_color;
  }


}
