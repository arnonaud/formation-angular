import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';

  public greeting;

  public message = 'my message';

  ngOnInit(): void {
    setTimeout(() => {
      this.greeting =   {title: 'test'};
    }, 1000);
  
  }

  public clickHandler(): void {
    this.greeting.title = 'clickHandler';
  }
}
