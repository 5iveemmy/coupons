import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  imports: [DividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent {}
