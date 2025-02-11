import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { RadioGroupComponent } from '../../../../components/radio-group/radio-group.component';

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
  ],
  templateUrl: './store-section.component.html',
  styleUrl: './store-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreSectionComponent {
  selectedOption = signal<string | null>(null);
  form: FormGroup;
  rangeValues: number[] = [1000, 3000];

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
    console.log('Selected Category:', this.selectedOption());
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedCategory: [null],
    });
  }
}
