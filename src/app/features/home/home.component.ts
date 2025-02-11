import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreSectionComponent } from './components/store-section/store-section.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, StoreSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
