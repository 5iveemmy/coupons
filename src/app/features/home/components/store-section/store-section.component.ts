import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { RadioGroupComponent } from '../../../../components/radio-group/radio-group.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { CardComponent } from '../../../../components/card/card.component';
import couponData from '../../../../../data/couponDataTest.json';
import { Coupon } from '../../../../../coupon';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-store-section',
  imports: [
    RadioButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    SliderModule,
    InputNumberModule,
    RadioGroupComponent,
    InputGroupModule,
    ButtonModule,
    SelectModule,
    CardComponent,
    PaginatorModule,
  ],
  templateUrl: './store-section.component.html',
  styleUrl: './store-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreSectionComponent implements OnInit {
  selectedOption = signal<string | null>(null);
  form: FormGroup;
  rangeValues: number[] = [1000, 3000];
  coupons: Coupon[] = [];
  filteredCoupons: Coupon[] = [];
  searchQuery: string = '';
  sortOption: string = 'newest';
  pageSize = 16;
  currentPage = 0;
  totalRecord = couponData.total_count;

  ngOnInit() {
    this.coupons = couponData.data;
    this.filteredCoupons = [...this.coupons];
    this.sortCoupons();
    this.updatePageData();
  }

  updatePageData() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.filteredCoupons = this.coupons.slice(start, end);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.updatePageData();
  }

  searchCoupons() {
    this.filteredCoupons = this.coupons.filter((coupon) =>
      coupon.company_name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }

  sortCoupons() {
    this.filteredCoupons = [...this.filteredCoupons].sort((a, b) => {
      switch (this.sortOption) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'asc':
          return a.title.localeCompare(b.title);
        case 'desc':
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    this.searchCoupons();
  }

  onSortChange() {
    this.sortCoupons();
  }

  categories = [
    { key: '1', name: 'Resturant' },
    { key: '2', name: 'Music' },
    { key: '3', name: 'Ride' },
    { key: '4', name: 'E-Commerce' },
  ];
  percentages = [
    { key: '1', name: 'Free' },
    { key: '2', name: '0 - 10%' },
    { key: '3', name: '10 - 25%' },
    { key: '4', name: '35 - 50%' },
    { key: '5', name: '50 - 65%' },
    { key: '6', name: '65% & Above' },
  ];

  locations = [
    { key: '1', name: 'Lagos' },
    { key: '2', name: 'Ogun' },
    { key: '3', name: 'Oyo' },
    { key: '4', name: 'Abuja' },
    { key: '5', name: 'Port Harcourt' },
  ];

  onOptionSelect(key: string) {
    this.selectedOption.set(key);
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedCategory: [null],
    });
  }

  //most of the coupons were created at the same time, newest/oldest sort doesn't show noticeable changes
  sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
    { label: 'Title (A-Z)', value: 'asc' },
    { label: 'Title (Z-A)', value: 'desc' },
  ];
}
