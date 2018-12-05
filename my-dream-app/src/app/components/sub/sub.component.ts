import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public myColor = 'black';
  constructor() { }

  ngOnInit() {
  }

  clickhandler(color: string): void {
    this.myColor = color;
  }

}
