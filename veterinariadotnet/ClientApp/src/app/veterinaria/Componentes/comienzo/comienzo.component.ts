import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Imagenes } from './imagenes';

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.component.html',
  styleUrls: ['./comienzo.component.css']
})
export class ComienzoComponent implements OnInit {
  showNavigationArrows = false;
  imagenes: Imagenes;
  direction;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    this.imagenes = new Imagenes();
  }

  ngOnInit(): void {
  }
  sliderOn(event) { this.direction = event.direction; }
}
