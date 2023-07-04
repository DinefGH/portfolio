import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['books-1281581_1920.jpg', 'coding-924920_1920.jpg', 'study-789631_1920.jpg',]
  headlines = [
    'My study place',
    'Bring engineering to the next level',
    'My work place',
    ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false

      setTimeout(() => {
        this.showImage = true
      }, 100);
    }, 8000);
  }
}

