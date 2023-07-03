import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  images = ['books-1281581_1920.jpg', 'coding-924920_1920.jpg', 'study-789631_1920.jpg',]
  currentImage = 0;
  ngOnInit() {
  this.updateImage();
  }

  updateImage() {

    setInterval(() => {
  this.currentImage++;
  this.currentImage = this.currentImage % this.images.length;
    },8000);
  }
}
