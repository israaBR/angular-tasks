import { Component } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class sliderComponent {
  imgSrc: string;
  current: number;
  constructor() {
    this.current = 0;
    this.imgSrc = this.imagesList[this.current];
  }
  imagesList: string[] = [
    'https://hygger.io/wp-content/uploads/2020/04/15.png',
    'https://sm.pcmag.com/pcmag_au/guide/t/the-best-t/the-best-to-do-list-apps-for-2023_fxqc.jpg',
    'https://conceptboard.com/wp-content/uploads/feature-pic-todo-list-blog.png',
  ];
  viewPrevious() {
    this.current--;
    if (this.current < 0) this.current = this.imagesList.length - 1;
    this.imgSrc = this.imagesList[this.current];
  }
  viewNext() {
    this.current++;
    if (this.current == this.imagesList.length) this.current = 0;
    this.imgSrc = this.imagesList[this.current];
  }
}
