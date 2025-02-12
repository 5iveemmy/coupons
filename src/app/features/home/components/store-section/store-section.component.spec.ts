import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreSectionComponent } from './store-section.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import couponData from '../../../../../data/couponDataTest.json';

describe('StoreSectionComponent', () => {
  let component: StoreSectionComponent;
  let fixture: ComponentFixture<StoreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreSectionComponent, CommonModule, ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with coupons and filter them correctly', () => {
    expect(component.coupons.length).toBe(couponData.data.length);
    expect(component.filteredCoupons.length).toBeLessThanOrEqual(component.coupons.length);
  });

  it('should update page data correctly', () => {
    component.currentPage = 1;
    component.pageSize = 10;
    component.updatePageData();
    expect(component.filteredCoupons.length).toBeLessThanOrEqual(10);
  });

  it('should filter coupons based on search query', () => {
    component.searchQuery = 'test';
    component.searchCoupons();
    expect(component.filteredCoupons.every((coupon) => coupon.company_name.toLowerCase().includes('test'))).toBeTrue();
  });

  it('should sort coupons correctly by title (A-Z)', () => {
    component.sortOption = 'asc';
    component.sortCoupons();
    expect(component.filteredCoupons).toEqual(
      [...component.filteredCoupons].sort((a, b) => a.title.localeCompare(b.title)),
    );
  });

  it('should sort coupons correctly by newest', () => {
    component.sortOption = 'newest';
    component.sortCoupons();
    expect(component.filteredCoupons).toEqual(
      [...component.filteredCoupons].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      ),
    );
  });

  it('should update selected option when onOptionSelect is called', () => {
    component.onOptionSelect('2');
    expect(component.selectedOption()).toBe('2');
  });
});
