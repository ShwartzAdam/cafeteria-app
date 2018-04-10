import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStudentInfo]'
})

export class StudentDirective {
    constructor(private el: ElementRef,
                private renderer: Renderer2) {
      console.log(el);
      // el.nativeElement.style.backgroundColor = 'white';
    }
}
