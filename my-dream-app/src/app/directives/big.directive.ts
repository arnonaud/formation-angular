import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBig]'
})
export class BigDirective implements OnInit {

  @Input('size')
  private size: number = 0;

  counter: number = 0;

  previousSize: string;
  previousContent: string;

  @HostListener('mouseenter')
  private mouseenterHandler() {
    (this.elem.nativeElement as HTMLDivElement).style.fontSize = this.size + "px";
    this.counter++;
    (this.elem.nativeElement as HTMLDivElement).innerHTML += this.counter;
  } 

  @HostListener('mouseleave')
  private mouseleaveHandler() {
    (this.elem.nativeElement as HTMLDivElement).style.fontSize = this.previousSize;
    (this.elem.nativeElement as HTMLDivElement).innerHTML = this.previousContent;
  }

  constructor(private elem: ElementRef) {
      this.elem = elem; 
  }

  ngOnInit() {
    this.previousSize = (this.elem.nativeElement as HTMLDivElement).style.fontSize;
    this.previousContent = (this.elem.nativeElement as HTMLDivElement).innerHTML;
  }

  

}
