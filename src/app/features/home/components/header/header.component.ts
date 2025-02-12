import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
})
export class HeaderComponent implements OnInit {
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
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
