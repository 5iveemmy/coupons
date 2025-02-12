import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-header',
  imports: [DividerModule, CarouselModule, CardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  host: { ngSkipHydration: 'true' },
})
export class HeaderComponent {
  promos = [
    {
      image: 'bg-party.png',
      title: 'UX Designer Intern at Google',
    },
    {
      image: 'bg-party.png',
      title: '50% Off on Nike Shoes',
    },
    {
      image: 'bg-party.png',
      title: 'Amazon Gift Card Offer',
    },
  ];
}
