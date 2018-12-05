import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'iproducts';
  public currentRoute: string;

  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationCancel) {
        // console.log(event);
      }
      if(event instanceof NavigationEnd) {
        // console.log(event);
        this.currentRoute = event.url;
      }
    });
  }
}
