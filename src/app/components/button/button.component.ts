import { Component, Input, HostBinding } from '@angular/core';

import { ButtonStyle } from './button-style.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonColor } from './button-color.enum';

@Component({
  selector:
    'div[fooButton],span[fooButton],a[fooButton],input[fooButton],button[fooButton]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public style: string | 'solid' | 'outlined' = ButtonStyle.SOLID; // default solid

  @Input()
  public size: string | 'small' | 'medium' | 'large' = ButtonSize.SMALL; // default small

  @Input()
  public shape: string | 'squared' | 'rounded' | 'pilled' = ButtonShape.ROUNDED; // default rounded

  @Input()
  public color:
    | string
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light' = ButtonColor.PRIMARY; // default primary

  constructor() {
    this.style = ButtonStyle.SOLID;
    this.size = ButtonSize.SMALL;
    this.shape = ButtonShape.ROUNDED;
    this.color = ButtonColor.PRIMARY;
  }

  ngOnInit(): void {
    this.size = this.buttonSize(this.size);
    this.shape = this.buttonShape(this.shape);
    this.color = this.buttonColor(this.color);
    this.style = this.buttonStyle(this.style);
  }

  buttonSize(sizeName: string) {
    switch (sizeName) {
      case 'small':
        return ButtonSize.SMALL;

      case 'medium':
        return ButtonSize.MEDIUM;

      case 'large':
        return ButtonSize.LARGE;

      default:
        return ButtonSize.SMALL;
    }
  }

  buttonStyle(styleName: string) {
    switch (styleName) {
      case 'solid':
        return ButtonStyle.SOLID;

      case 'outlined':
        return ButtonStyle.OUTLINED;

      default:
        return ButtonStyle.SOLID;
    }
  }

  buttonShape(shapeName: string) {
    switch (shapeName) {
      case 'squared':
        return ButtonShape.SQUARED;

      case 'rounded':
        return ButtonShape.ROUNDED;

      case 'pilled':
        return ButtonShape.PILLED;

      default:
        return ButtonShape.ROUNDED;
    }
  }

  buttonColor(colorName: string) {
    switch (colorName) {
      case 'default':
        return ButtonColor.DEFAULT;
      case 'primary':
        return ButtonColor.PRIMARY;
      case 'secondary':
        return ButtonColor.SECONDARY;
      case 'success':
        return ButtonColor.SUCCESS;
      case 'info':
        return ButtonColor.INFO;
      case 'warning':
        return ButtonColor.WARNING;
      case 'danger':
        return ButtonColor.DANGER;
      case 'light':
        return ButtonColor.LIGHT;

      default:
        return ButtonColor.DEFAULT;
    }
  }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`;
  }
}
