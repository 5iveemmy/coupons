import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Coupon } from '../../../coupon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardComponent {
  @Input() coupon!: Coupon;

  getAcronym(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
}
