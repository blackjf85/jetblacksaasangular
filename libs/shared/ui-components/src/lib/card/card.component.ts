import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jb-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="card"
      [ngClass]="{ 'with-header': header, 'with-footer': footer }"
    >
      @if (header) {
      <div class="card-header">
        <h3 class="card-title">{{ header }}</h3>
      </div>
      }
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      @if (footer) {
      <div class="card-footer">
        <ng-content select="[footerContent]"></ng-content>
      </div>
      }
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() header?: string;
  @Input() footer?: string;
}
