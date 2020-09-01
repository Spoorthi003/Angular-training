import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl:'rating-component.component.html',
  styleUrls: ['./rating-component.component.css']
})
export class RatingComponentComponent implements OnInit {

 public numberOfStras = 5;
  @Input() rating = 0;
  public ratingpercentage:string;
  constructor() {}

  ngOnInit(): void {
    this.ratingpercentage =((this.rating/this. numberOfStras) *100) + '%';
  }
}
