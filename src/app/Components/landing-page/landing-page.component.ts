import { Component, OnDestroy, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, OnDestroy {

  images: string[] = [
    '../../assets/images/BookImg1.jpg',
    '../../assets/images/BookImg2.jpg',
    '../../assets/images/BookImg3.jpg'
  ];
  currentImage: string = this.images[0];
  private imageIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startImageRotation();
  }

  startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.imageIndex];
    }, 3000); // 3000 ms = 3 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
