import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string=" https://angular.io/generated/images/marketing/home/build-for-everyone.svg "
  @Input()
  cardTitle: string=""
  constructor() { }

  ngOnInit(): void {
  }

}
