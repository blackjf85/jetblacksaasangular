import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'ghost'
  | 'icon';

@Component({
  selector: 'jb-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="btn"
      [ngClass]="{
        'btn--primary': variant === 'primary',
        'btn--secondary': variant === 'secondary',
        'btn--danger': variant === 'danger',
        'btn--ghost': variant === 'ghost',
        'btn--icon': variant === 'icon'
      }"
      [disabled]="disabled"
      [attr.type]="type"
      [attr.aria-label]="icon ? icon : null"
    >
      @if (icon && variant === 'icon') {
      <span class="material-icons">{{ icon }}</span>
      } @else {
      <ng-content></ng-content>
      }
    </button>
  `,
  styles: [
    `
      @import './button.component.scss';
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() icon?: string;
}
