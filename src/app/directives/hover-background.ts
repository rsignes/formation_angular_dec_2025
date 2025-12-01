import { Directive, HostBinding, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
})
export class HoverBackground {
  color = input('red', { alias: 'appHoverBackground' });

  @HostBinding('style.background') background: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor(this.color());
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('white');
  }

  setBgColor(color: string) {
    this.background = color;
  }
}
