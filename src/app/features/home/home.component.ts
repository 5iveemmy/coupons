import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreSectionComponent } from './components/store-section/store-section.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, StoreSectionComponent, InquiryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
